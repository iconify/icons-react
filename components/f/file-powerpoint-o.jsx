import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j8nsyd_1z.css';

const viewBox = {"width":1536,"height":1792};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j8nsyd_1z"/>`,
		"fallback": "fa:file-powerpoint-o",
	});
}

export default Component;
