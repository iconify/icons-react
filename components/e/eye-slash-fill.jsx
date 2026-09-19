import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b_aaylb8v.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b_aaylb8v"/>`,
		"fallback": "f7:eye-slash-fill",
	});
}

export default Component;
