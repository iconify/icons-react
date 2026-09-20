import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d246sqzmh.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d246sqzmh"/>`,
		"fallback": "streamline:file-add-alternate",
	});
}

export default Component;
