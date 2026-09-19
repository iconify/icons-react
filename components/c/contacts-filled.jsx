import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pkea-w76j.css';
import '../../css/u/u52trxfes.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pkea-w76j"/><path class="u52trxfes"/>`,
		"fallback": "bitcoin-icons:contacts-filled",
	});
}

export default Component;
