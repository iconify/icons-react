import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mgcvq8oml.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mgcvq8oml"/>`,
		"fallback": "fa7-regular:file-pdf",
	});
}

export default Component;
