import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/g/gd9n58n9r.css';
import '../../css/i/i1l-yek_r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="gd9n58n9r"/><path class="i1l-yek_r"/></g>`,
		"fallback": "hugeicons:hand",
	});
}

export default Component;
