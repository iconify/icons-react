import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q-izh3bji.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="q-izh3bji"/>`,
		"fallback": "streamline-color:button-play-flat",
	});
}

export default Component;
