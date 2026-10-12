import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/u/uoucunbjj.css';
import '../../css/m/m96jl0kxe.css';
import '../../css/w/w5cmb58jd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="uoucunbjj"/><path class="m96jl0kxe"/><path class="w5cmb58jd"/></g>`,
		"fallback": "andrsrxn:alphabet",
	});
}

export default Component;
