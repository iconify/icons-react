import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aynsa_bpi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aynsa_bpi"/>`,
		"fallback": "iconaut:circle-power-solid",
	});
}

export default Component;
