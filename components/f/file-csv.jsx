import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m47rgvb_z.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m47rgvb_z"/>`,
		"fallback": "fa7-solid:file-csv",
	});
}

export default Component;
