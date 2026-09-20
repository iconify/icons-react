import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ulyepfb3s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ulyepfb3s"/>`,
		"fallback": "thesvg-color:gunicorn",
	});
}

export default Component;
