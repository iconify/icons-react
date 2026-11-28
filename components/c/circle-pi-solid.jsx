import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vw99qac_g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vw99qac_g"/>`,
		"fallback": "iconaut:circle-pi-solid",
	});
}

export default Component;
