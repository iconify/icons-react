import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uhjen_f9z.css';

const viewBox = {"width":1025,"height":832};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uhjen_f9z"/>`,
		"fallback": "whh:construction",
	});
}

export default Component;
