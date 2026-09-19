import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/naa71zi0v.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="naa71zi0v"/>`,
		"fallback": "f7:dot-square-fill",
	});
}

export default Component;
