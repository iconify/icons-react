import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tu_lq32wr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tu_lq32wr"/>`,
		"fallback": "ix:add-document-note",
	});
}

export default Component;
