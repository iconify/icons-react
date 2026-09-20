import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uy0lpbywg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uy0lpbywg"/>`,
		"fallback": "selfhst:calmness",
	});
}

export default Component;
