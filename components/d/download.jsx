import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xos-9pjzo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xos-9pjzo"/>`,
		"fallback": "vadivam:download",
	});
}

export default Component;
