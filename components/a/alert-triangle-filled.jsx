import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vqtdfgbat.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vqtdfgbat"/>`,
		"fallback": "reicon:alert-triangle-filled",
	});
}

export default Component;
