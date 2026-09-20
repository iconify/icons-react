import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l228-e65r.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="l228-e65r"/>`,
		"fallback": "streamline-flex:hourglass-remix",
	});
}

export default Component;
