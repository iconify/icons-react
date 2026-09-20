import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/knj-3jbhn.css';
import '../../css/r/rebsdbfax.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="knj-3jbhn"/><path class="rebsdbfax"/></g>`,
		"fallback": "tabler:basket-question",
	});
}

export default Component;
