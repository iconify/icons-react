import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mpfj5ub0p.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mpfj5ub0p"/>`,
		"fallback": "file-icons:docbook",
	});
}

export default Component;
