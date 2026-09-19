import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xgzkv4bov.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xgzkv4bov"/>`,
		"fallback": "bitcoin-icons:hidden-filled",
	});
}

export default Component;
