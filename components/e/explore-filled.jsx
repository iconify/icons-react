import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ie1c_b5nl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ie1c_b5nl"/>`,
		"fallback": "ix:explore-filled",
	});
}

export default Component;
