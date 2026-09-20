import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g_oyv7tku.css';
import '../../css/m/m36y1-ioy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g_oyv7tku"/><path class="m36y1-ioy"/>`,
		"fallback": "selfhst:codeberg-dark",
	});
}

export default Component;
