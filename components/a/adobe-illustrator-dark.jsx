import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hs2bv9i_q.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hs2bv9i_q"/>`,
		"fallback": "selfhst:adobe-illustrator-dark",
	});
}

export default Component;
