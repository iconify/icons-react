import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cvkbhebit.css';

const viewBox = {"width":386,"height":390};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cvkbhebit"/>`,
		"fallback": "thesvg-color:goil-dark",
	});
}

export default Component;
