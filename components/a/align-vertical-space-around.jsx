import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zdhpbdb5h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zdhpbdb5h"/>`,
		"fallback": "vadivam:align-vertical-space-around",
	});
}

export default Component;
