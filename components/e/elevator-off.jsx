import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/w178-tccq.css';
import '../../css/i/iz6ao-rla.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="w178-tccq"/><path class="iz6ao-rla"/></g>`,
		"fallback": "tabler:elevator-off",
	});
}

export default Component;
