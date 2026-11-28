import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u19wi-b3t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u19wi-b3t"/>`,
		"fallback": "iconaut:discord-solid",
	});
}

export default Component;
