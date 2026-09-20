import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/goe2wn6lq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="goe2wn6lq"/>`,
		"fallback": "selfhst:commento-light",
	});
}

export default Component;
