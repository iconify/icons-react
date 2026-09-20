import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/d7fc_eqhq.css';
import '../../css/s/srz5hiblq.css';
import '../../css/w/wx6aefbne.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="d7fc_eqhq"/><path class="srz5hiblq"/><path class="wx6aefbne"/></g>`,
		"fallback": "keyline-icons:calculator-duotone",
	});
}

export default Component;
