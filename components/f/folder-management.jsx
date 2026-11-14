import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/k/k36bylbez.css';
import '../../css/b/bmzdvqysz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="k36bylbez"/><path class="bmzdvqysz"/></g>`,
		"fallback": "hugeicons:folder-management",
	});
}

export default Component;
