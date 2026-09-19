import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/f/f0wc88mbl.css';
import '../../css/x/xd1esxbpj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="f0wc88mbl"/><path class="xd1esxbpj"/></g>`,
		"fallback": "hugeicons:bed",
	});
}

export default Component;
