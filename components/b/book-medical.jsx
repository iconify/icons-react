import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vt1kn2zpk.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vt1kn2zpk"/>`,
		"fallback": "fa7-solid:book-medical",
	});
}

export default Component;
