import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ec4wb2pdg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ec4wb2pdg"/>`,
		"fallback": "selfhst:double-take-light",
	});
}

export default Component;
