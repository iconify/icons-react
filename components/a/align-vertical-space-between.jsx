import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f226lbbca.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f226lbbca"/>`,
		"fallback": "vadivam:align-vertical-space-between",
	});
}

export default Component;
