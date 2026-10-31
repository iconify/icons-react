import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/sjyrws3-o.css';
import '../../css/w/wta8iob7z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="sjyrws3-o"/><path class="wta8iob7z"/></g>`,
		"fallback": "struq:file-warning",
	});
}

export default Component;
