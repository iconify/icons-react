import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/emg_5vb1u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="emg_5vb1u"/>`,
		"fallback": "thesvg:fortinet",
	});
}

export default Component;
