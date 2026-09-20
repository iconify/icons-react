import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jh0_um3lu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jh0_um3lu"/>`,
		"fallback": "reicon:house-filled",
	});
}

export default Component;
