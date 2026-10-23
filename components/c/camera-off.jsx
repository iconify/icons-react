import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gojx-tb-u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gojx-tb-u"/>`,
		"fallback": "vadivam:camera-off",
	});
}

export default Component;
