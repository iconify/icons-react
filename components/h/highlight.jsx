import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wta-9zxow.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wta-9zxow"/>`,
		"fallback": "pajamas:highlight",
	});
}

export default Component;
