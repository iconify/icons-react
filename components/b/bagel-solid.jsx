import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mqt_2kuii.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mqt_2kuii"/>`,
		"fallback": "iconaut:bagel-solid",
	});
}

export default Component;
