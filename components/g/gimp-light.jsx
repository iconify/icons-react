import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sfhtnms6h.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sfhtnms6h"/>`,
		"fallback": "selfhst:gimp-light",
	});
}

export default Component;
