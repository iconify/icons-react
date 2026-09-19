import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zdsarc1ua.css';
import '../../css/g/gphd1nbjo.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zdsarc1ua"/><path class="gphd1nbjo"/>`,
		"fallback": "clarity:factory-line",
	});
}

export default Component;
