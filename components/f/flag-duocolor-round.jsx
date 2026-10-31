import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tkntuhbzi.css';
import '../../css/c/c5_wc7b7b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="tkntuhbzi"/><path class="c5_wc7b7b"/></g>`,
		"fallback": "coolicons:flag-duocolor-round",
	});
}

export default Component;
