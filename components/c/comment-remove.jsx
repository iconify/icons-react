import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f_ydf_p7i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f_ydf_p7i"/>`,
		"fallback": "iconamoon:comment-remove",
	});
}

export default Component;
