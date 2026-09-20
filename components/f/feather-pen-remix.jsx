import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h6v13pvko.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="h6v13pvko"/>`,
		"fallback": "streamline-flex:feather-pen-remix",
	});
}

export default Component;
