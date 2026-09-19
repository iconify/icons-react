import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yx3wucg6s.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yx3wucg6s"/>`,
		"fallback": "fa7-brands:evernote",
	});
}

export default Component;
