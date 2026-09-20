import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/el88tabhn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="el88tabhn"/>`,
		"fallback": "thesvg-color:google-nearby",
	});
}

export default Component;
