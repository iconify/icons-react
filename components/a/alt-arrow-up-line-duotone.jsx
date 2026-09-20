import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/s/s_mr-hbpj.css';
import '../../css/y/yj0yf9o2f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="s_mr-hbpj"/><path class="yj0yf9o2f"/></g>`,
		"fallback": "solar:alt-arrow-up-line-duotone",
	});
}

export default Component;
