import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/y/ydy6h4gep.css';
import '../../css/t/to0vgfb5e.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><circle class="ydy6h4gep"/><path class="to0vgfb5e"/></g>`,
		"fallback": "charm:git-commit",
	});
}

export default Component;
