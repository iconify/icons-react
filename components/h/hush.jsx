import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/v/v4cdqwbvw.css';
import '../../css/v/v4vk_jbvs.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="v4cdqwbvw"/><path class="v4vk_jbvs"/></g>`,
		"fallback": "cryptocurrency-color:hush",
	});
}

export default Component;
