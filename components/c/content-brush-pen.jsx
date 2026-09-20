import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kseq9wpea.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kseq9wpea"/>`,
		"fallback": "streamline-freehand:content-brush-pen",
	});
}

export default Component;
