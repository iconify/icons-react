import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufj8p0bjx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ufj8p0bjx"/>`,
		"fallback": "iconaut:baseline-shift-solid",
	});
}

export default Component;
