import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mvx0o4p_h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mvx0o4p_h"/>`,
		"fallback": "bitcoin-icons:hashes-outline",
	});
}

export default Component;
