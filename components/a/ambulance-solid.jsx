import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o_e_q-1ks.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o_e_q-1ks"/>`,
		"fallback": "la:ambulance-solid",
	});
}

export default Component;
