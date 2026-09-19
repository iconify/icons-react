import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vzo3ypbps.css';
import '../../css/c/c7g2j5ruz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><circle class="vzo3ypbps"/><path class="c7g2j5ruz"/></g>`,
		"fallback": "akar-icons:alarm",
	});
}

export default Component;
