import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gaeaflbsb.css';
import '../../css/a/aa1hjvvok.css';
import '../../css/k/k1xp4kbks.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gaeaflbsb"/><path class="aa1hjvvok"/><path class="k1xp4kbks"/>`,
		"fallback": "energy-icons:emissions-trading-48-bold",
	});
}

export default Component;
