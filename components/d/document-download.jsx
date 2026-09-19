import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e9pxw5fcl.css';
import '../../css/a/afvukzbcr.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e9pxw5fcl"/><path class="afvukzbcr"/>`,
		"fallback": "carbon:document-download",
	});
}

export default Component;
