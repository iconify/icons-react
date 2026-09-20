import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rsxp_0bcd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rsxp_0bcd"/>`,
		"fallback": "tabler:currency-solana",
	});
}

export default Component;
