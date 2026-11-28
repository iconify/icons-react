import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tx_mtm98y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="primary tx_mtm98y"/>`,
		"fallback": "iconaut:circle-duotone",
	});
}

export default Component;
