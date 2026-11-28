import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lffg11dkp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lffg11dkp"/>`,
		"fallback": "noviair-light:ceiling-lamp",
	});
}

export default Component;
