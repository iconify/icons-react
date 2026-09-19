import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l0v0ilbui.css';

const viewBox = {"width":1536,"height":1792};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l0v0ilbui"/>`,
		"fallback": "fa:file-word-o",
	});
}

export default Component;
