import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n2neunb3u.css';
import '../../css/a/a600ktbsl.css';
import '../../css/l/l1xb2ibbw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n2neunb3u"/><path class="a600ktbsl"/><path class="l1xb2ibbw"/>`,
		"fallback": "energy-icons:arrow-circle-right-48-bold",
	});
}

export default Component;
