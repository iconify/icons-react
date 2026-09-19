import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qhd2w0b6x.css';
import '../../css/a/a8e-e4bkc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qhd2w0b6x"/><path clip-rule="evenodd" class="a8e-e4bkc"/>`,
		"fallback": "bitcoin-icons:confirmations-3-filled",
	});
}

export default Component;
