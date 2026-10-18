import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/sw9225bsx.css';
import '../../css/y/yf5go4bkn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="sw9225bsx"/><path class="yf5go4bkn"/></g>`,
		"fallback": "vadivam:bolt",
	});
}

export default Component;
