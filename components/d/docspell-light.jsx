import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/glonfpb_e.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="glonfpb_e"/>`,
		"fallback": "selfhst:docspell-light",
	});
}

export default Component;
