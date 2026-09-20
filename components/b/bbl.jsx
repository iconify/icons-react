import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cmu89xj2n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cmu89xj2n"/>`,
		"fallback": "token:bbl",
	});
}

export default Component;
