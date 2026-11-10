import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/f/fy653dc7v.css';
import '../../css/f/fk-o0zfif.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="fy653dc7v"/><path class="fk-o0zfif"/></g>`,
		"fallback": "proicons:css-2",
	});
}

export default Component;
