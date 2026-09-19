import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/au9or3-rx.css';

const viewBox = {"width":449,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="au9or3-rx"/>`,
		"fallback": "file-icons:alacritty",
	});
}

export default Component;
