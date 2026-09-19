import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/plxs-nt5e.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="plxs-nt5e"/>`,
		"fallback": "game-icons:aerosol",
	});
}

export default Component;
