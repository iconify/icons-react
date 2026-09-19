import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z2axqqb4p.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="z2axqqb4p"/>`,
		"fallback": "file-icons:broccoli",
	});
}

export default Component;
