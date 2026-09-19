import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yzi_4nscr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yzi_4nscr"/>`,
		"fallback": "file-icons:adobe-acrobat",
	});
}

export default Component;
