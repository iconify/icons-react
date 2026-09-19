import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wcf7diewg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wcf7diewg"/>`,
		"fallback": "file-icons:glyphs",
	});
}

export default Component;
