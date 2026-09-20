import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/f/fl6asebrj.css';
import '../../css/j/jaspkkbgr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="fl6asebrj"/><path class="jaspkkbgr"/></g>`,
		"fallback": "streamline-ultimate:charging-flash-wifi",
	});
}

export default Component;
