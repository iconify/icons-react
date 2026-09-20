import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/focd844dz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="focd844dz"/>`,
		"fallback": "selfhst:dex-auth-dark",
	});
}

export default Component;
