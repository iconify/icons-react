import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rkcxuhb8p.css';
import '../../css/k/ky_bo_oah.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rkcxuhb8p"/><path class="ky_bo_oah"/>`,
		"fallback": "selfhst:colanode",
	});
}

export default Component;
