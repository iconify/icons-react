import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/la3g_rb9a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="la3g_rb9a"/>`,
		"fallback": "vadivam:arrow-big-up-dash",
	});
}

export default Component;
