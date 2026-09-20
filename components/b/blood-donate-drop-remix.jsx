import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nub9o5gbz.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nub9o5gbz"/>`,
		"fallback": "streamline-flex:blood-donate-drop-remix",
	});
}

export default Component;
