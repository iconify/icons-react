import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v_m5tq8yt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v_m5tq8yt"/>`,
		"fallback": "iconaut:cow-solid",
	});
}

export default Component;
