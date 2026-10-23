import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dbno6kp8e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dbno6kp8e"/>`,
		"fallback": "vadivam:archive",
	});
}

export default Component;
