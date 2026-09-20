import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/khqphp3sf.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="khqphp3sf"/>`,
		"fallback": "streamline-flex:anchor-remix",
	});
}

export default Component;
