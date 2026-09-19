import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/g/gh5e_vb1o.css';
import '../../css/s/s1hmp9uzs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="gh5e_vb1o"/><path class="s1hmp9uzs"/></g>`,
		"fallback": "hugeicons:delivery-return-02",
	});
}

export default Component;
