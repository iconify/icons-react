import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/uzg8zabul.css';
import '../../css/i/iz79rhbfi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="uzg8zabul"/><path class="iz79rhbfi"/></g>`,
		"fallback": "keyline-icons:arrow-in-down-dashed-panel-duotone",
	});
}

export default Component;
