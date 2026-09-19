import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zkvsifb2b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zkvsifb2b"/>`,
		"fallback": "griddy-icons:image-copy-filled",
	});
}

export default Component;
