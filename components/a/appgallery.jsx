import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dk9_r652x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dk9_r652x"/>`,
		"fallback": "thesvg-color:appgallery",
	});
}

export default Component;
