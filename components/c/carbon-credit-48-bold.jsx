import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n2neunb3u.css';
import '../../css/q/q9ec6cb9b.css';
import '../../css/o/on2nbp2_b.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n2neunb3u"/><path class="q9ec6cb9b"/><path class="on2nbp2_b"/>`,
		"fallback": "energy-icons:carbon-credit-48-bold",
	});
}

export default Component;
