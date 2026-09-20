import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mnt2txbcz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mnt2txbcz"/>`,
		"fallback": "reicon:close-circle-filled",
	});
}

export default Component;
