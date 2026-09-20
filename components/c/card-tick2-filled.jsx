import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u8_y_zb5j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u8_y_zb5j"/>`,
		"fallback": "reicon:card-tick2-filled",
	});
}

export default Component;
