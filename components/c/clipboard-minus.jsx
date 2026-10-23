import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/v352__z5u.css';
import '../../css/l/lftxrqbbd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="v352__z5u"/><path class="lftxrqbbd"/></g>`,
		"fallback": "vadivam:clipboard-minus",
	});
}

export default Component;
