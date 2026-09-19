import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/z/zv5s0bcpd.css';
import '../../css/o/osw_11bnf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="zv5s0bcpd"/><path class="osw_11bnf"/></g>`,
		"fallback": "hugeicons:books-02",
	});
}

export default Component;
