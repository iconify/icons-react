import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xxo7lob4z.css';

const viewBox = {"width":1025,"height":960};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xxo7lob4z"/>`,
		"fallback": "whh:insertpictureright",
	});
}

export default Component;
