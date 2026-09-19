import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/omyq3kh2t.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="omyq3kh2t"/>`,
		"fallback": "f7:face-smiling",
	});
}

export default Component;
