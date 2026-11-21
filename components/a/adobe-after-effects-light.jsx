import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r10ma0e2j.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r10ma0e2j"/>`,
		"fallback": "selfhst:adobe-after-effects-light",
	});
}

export default Component;
