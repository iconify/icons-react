import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pvz1_m6rm.css';
import '../../css/c/c0nme4boi.css';
import '../../css/t/tqm4eob6w.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pvz1_m6rm"/><path class="c0nme4boi"/><path class="tqm4eob6w"/>`,
		"fallback": "material-icon-theme:cobol",
	});
}

export default Component;
