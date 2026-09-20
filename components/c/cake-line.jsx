import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/a7779yojj.css';
import '../../css/w/wum7oib2b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="a7779yojj"/><path class="wum7oib2b"/></g>`,
		"fallback": "majesticons:cake-line",
	});
}

export default Component;
