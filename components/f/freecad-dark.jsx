import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fp1kyrs5x.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fp1kyrs5x"/>`,
		"fallback": "selfhst:freecad-dark",
	});
}

export default Component;
