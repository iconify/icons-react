import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/szxt5sb7j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="szxt5sb7j"/>`,
		"fallback": "reicon:bus3-filled",
	});
}

export default Component;
