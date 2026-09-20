import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vfk1jzxah.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vfk1jzxah"/>`,
		"fallback": "vadivam:check-check",
	});
}

export default Component;
