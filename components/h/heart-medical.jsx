import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bdc5ildnk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bdc5ildnk"/>`,
		"fallback": "uil:heart-medical",
	});
}

export default Component;
