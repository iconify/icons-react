import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i_ahudb5e.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i_ahudb5e"/>`,
		"fallback": "selfhst:filen-dark",
	});
}

export default Component;
