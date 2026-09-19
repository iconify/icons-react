import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p5443ewmy.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p5443ewmy"/>`,
		"fallback": "bi:file-ruled-fill",
	});
}

export default Component;
