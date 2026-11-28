import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vxo_lqb5b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vxo_lqb5b"/>`,
		"fallback": "iconaut:clipboard-x-solid",
	});
}

export default Component;
