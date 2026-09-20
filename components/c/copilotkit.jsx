import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/a/asyphl89v.css';
import '../../css/h/hd0f2xmdw.css';
import '../../css/g/gcrp6yu8e.css';
import '../../css/f/fafv2obpr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="asyphl89v"/><path class="hd0f2xmdw"/><path class="gcrp6yu8e"/><path class="fafv2obpr"/></g>`,
		"fallback": "thesvg:copilotkit",
	});
}

export default Component;
