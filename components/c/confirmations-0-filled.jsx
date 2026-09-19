import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mpc_zebhv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mpc_zebhv"/>`,
		"fallback": "bitcoin-icons:confirmations-0-filled",
	});
}

export default Component;
