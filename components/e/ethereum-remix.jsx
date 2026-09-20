import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hfvd3kb4h.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hfvd3kb4h"/>`,
		"fallback": "streamline:ethereum-remix",
	});
}

export default Component;
