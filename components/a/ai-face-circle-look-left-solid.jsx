import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k383pcbii.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k383pcbii"/>`,
		"fallback": "iconaut:ai-face-circle-look-left-solid",
	});
}

export default Component;
