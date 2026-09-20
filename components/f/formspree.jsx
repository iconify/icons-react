import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m7mf9ilkz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m7mf9ilkz"/>`,
		"fallback": "thesvg-color:formspree",
	});
}

export default Component;
