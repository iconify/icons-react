import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z3tfe5b7m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z3tfe5b7m"/>`,
		"fallback": "selfhst:goatcounter-light",
	});
}

export default Component;
