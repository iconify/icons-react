import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yp6nhjc-a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yp6nhjc-a"/>`,
		"fallback": "vadivam:heart-off",
	});
}

export default Component;
