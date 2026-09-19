import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fj2a8g2fq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fj2a8g2fq"/>`,
		"fallback": "bitcoin-icons:check-filled",
	});
}

export default Component;
