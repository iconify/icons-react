import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sax2kubug.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sax2kubug"/>`,
		"fallback": "subway:froward-1",
	});
}

export default Component;
