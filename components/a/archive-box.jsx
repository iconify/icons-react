import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/acjvezy8l.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="acjvezy8l"/>`,
		"fallback": "streamline:archive-box",
	});
}

export default Component;
