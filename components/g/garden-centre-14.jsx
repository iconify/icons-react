import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iwt559b_d.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iwt559b_d"/>`,
		"fallback": "osmic:garden-centre-14",
	});
}

export default Component;
