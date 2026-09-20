import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d-4qkbbor.css';
import '../../css/n/nm88jyiwb.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="d-4qkbbor"/><path class="nm88jyiwb"/></g>`,
		"fallback": "streamline-flex-color:cocktail",
	});
}

export default Component;
