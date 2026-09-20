import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o5b7hjb5g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="o5b7hjb5g"/>`,
		"fallback": "streamline-ultimate:emoji-angry-face-horns-demon-bold",
	});
}

export default Component;
