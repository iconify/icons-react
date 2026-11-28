import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v412_cb7x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v412_cb7x"/>`,
		"fallback": "iconaut:eye-closed-solid",
	});
}

export default Component;
