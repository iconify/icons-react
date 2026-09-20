import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/z/zjnva_byo.css';
import '../../css/g/ggrp1gbkp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="zjnva_byo"/><path class="ggrp1gbkp"/></g>`,
		"fallback": "solar:double-alt-arrow-right-broken",
	});
}

export default Component;
