import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/haxvedcdm.css';
import '../../css/a/alb_3ybms.css';
import '../../css/e/eu7poe5sx.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="haxvedcdm"/><path class="alb_3ybms"/><path class="eu7poe5sx"/>`,
		"fallback": "medical-icon:ear-nose-throat",
	});
}

export default Component;
