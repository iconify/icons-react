import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d8ats9hff.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d8ats9hff"/>`,
		"fallback": "f7:fx",
	});
}

export default Component;
