import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kj73_vt_u.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kj73_vt_u"/>`,
		"fallback": "garden:book-26",
	});
}

export default Component;
