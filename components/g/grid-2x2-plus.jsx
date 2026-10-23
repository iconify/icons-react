import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q-1v2wi4m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q-1v2wi4m"/>`,
		"fallback": "vadivam:grid-2x2-plus",
	});
}

export default Component;
