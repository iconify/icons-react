import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/d/deiahlb9z.css';
import '../../css/f/feasnmf_u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="deiahlb9z"/><path class="feasnmf_u"/></g>`,
		"fallback": "hugeicons:eiffel-tower",
	});
}

export default Component;
