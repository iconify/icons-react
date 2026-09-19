import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c3bz6eb_z.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c3bz6eb_z"/>`,
		"fallback": "bytesize:folder",
	});
}

export default Component;
