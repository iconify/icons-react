import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/n86fehjba.css';
import '../../css/p/pp5zsyq_c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="n86fehjba"/><ellipse class="pp5zsyq_c"/></g>`,
		"fallback": "akar-icons:flashlight",
	});
}

export default Component;
