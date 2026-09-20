import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hv4bgxz2i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hv4bgxz2i"/>`,
		"fallback": "uil:folder-slash",
	});
}

export default Component;
