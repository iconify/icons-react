import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/v/vewp37bih.css';
import '../../css/s/sjwyhhial.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="vewp37bih"/><path class="sjwyhhial"/></g>`,
		"fallback": "hugeicons:banknote",
	});
}

export default Component;
