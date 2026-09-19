import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/inixre9_y.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="inixre9_y"/>`,
		"fallback": "f7:envelope-badge-fill",
	});
}

export default Component;
