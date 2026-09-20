import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ecu067-ls.css';

const viewBox = {"width":40,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ecu067-ls"/>`,
		"fallback": "iwwa:file-csv",
	});
}

export default Component;
