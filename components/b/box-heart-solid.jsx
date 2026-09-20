import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h48g7vb5w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h48g7vb5w"/>`,
		"fallback": "pixel:box-heart-solid",
	});
}

export default Component;
