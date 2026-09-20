import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/dwufu6b3h.css';
import '../../css/z/zam4x1bkn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="dwufu6b3h"/><path class="zam4x1bkn"/></g>`,
		"fallback": "keyline-icons:banknote-x-two-tone",
	});
}

export default Component;
