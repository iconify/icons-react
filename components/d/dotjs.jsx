import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/umcw9nm8h.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="umcw9nm8h"/>`,
		"fallback": "file-icons:dotjs",
	});
}

export default Component;
