import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xyr2ydbac.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xyr2ydbac"/>`,
		"fallback": "streamline-plump-color:block-1-flat",
	});
}

export default Component;
