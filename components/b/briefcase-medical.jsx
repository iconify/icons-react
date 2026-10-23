import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zolay6gvm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zolay6gvm"/>`,
		"fallback": "vadivam:briefcase-medical",
	});
}

export default Component;
