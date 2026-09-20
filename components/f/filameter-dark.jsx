import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uo3hfxvig.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uo3hfxvig"/>`,
		"fallback": "selfhst:filameter-dark",
	});
}

export default Component;
