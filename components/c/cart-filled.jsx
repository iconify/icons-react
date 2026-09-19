import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rjfqssbtk.css';
import '../../css/s/sm8ol-sel.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rjfqssbtk"/><path class="sm8ol-sel"/>`,
		"fallback": "bitcoin-icons:cart-filled",
	});
}

export default Component;
