import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tr-eedcjf.css';
import '../../css/r/rqb2ygbhr.css';
import '../../css/z/zb4cfkbur.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tr-eedcjf"/><path class="rqb2ygbhr"/><path class="zb4cfkbur"/>`,
		"fallback": "energy-icons:district-heating-48-bold",
	});
}

export default Component;
