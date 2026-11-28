import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mu-686btx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mu-686btx"/>`,
		"fallback": "iconaut:earth-solid",
	});
}

export default Component;
