import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j-ea4ublc.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j-ea4ublc"/>`,
		"fallback": "fa6-brands:evernote",
	});
}

export default Component;
