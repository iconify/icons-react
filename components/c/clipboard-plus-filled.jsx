import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l17hfdciu.css';
import '../../css/l/lnshn9kak.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l17hfdciu"/><path class="lnshn9kak"/>`,
		"fallback": "boxicons:clipboard-plus-filled",
	});
}

export default Component;
