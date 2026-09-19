import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l_ae8_txj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l_ae8_txj"/>`,
		"fallback": "cbi:3d-filament",
	});
}

export default Component;
