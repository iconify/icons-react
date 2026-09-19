import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v6mz_vjes.css';
import '../../css/c/c441vmfnl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v6mz_vjes"/><path clip-rule="evenodd" class="c441vmfnl"/>`,
		"fallback": "bitcoin-icons:bank-filled",
	});
}

export default Component;
