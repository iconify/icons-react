import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l34xbtb4a.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l34xbtb4a"/>`,
		"fallback": "f7:helm",
	});
}

export default Component;
