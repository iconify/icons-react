import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vmvvp4bne.css';

const viewBox = {"width":256,"height":226};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vmvvp4bne"/>`,
		"fallback": "thesvg-color:bluesky",
	});
}

export default Component;
