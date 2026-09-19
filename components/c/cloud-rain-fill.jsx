import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/au_8zbb6t.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="au_8zbb6t"/>`,
		"fallback": "f7:cloud-rain-fill",
	});
}

export default Component;
