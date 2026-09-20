import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/djkklnbjb.css';
import '../../css/w/w8wjawbcc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path clip-rule="evenodd" class="djkklnbjb"/><path class="w8wjawbcc"/></g>`,
		"fallback": "keyline-icons:app-check-fill",
	});
}

export default Component;
