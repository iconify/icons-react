import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ktoz517ix.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ktoz517ix"/>`,
		"fallback": "fa-solid:file-word",
	});
}

export default Component;
