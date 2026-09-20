import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mst7sz6bi.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mst7sz6bi"/>`,
		"fallback": "pinhead:burger-and-drink-cup-with-straw",
	});
}

export default Component;
