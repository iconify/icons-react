import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/b/bjr4uf7pk.css';
import '../../css/y/ymvg5pbqm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="bjr4uf7pk"/><path class="ymvg5pbqm"/></g>`,
		"fallback": "solar:arrow-right-from-line-broken",
	});
}

export default Component;
