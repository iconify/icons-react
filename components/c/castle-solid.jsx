import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iuexnta5e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iuexnta5e"/>`,
		"fallback": "iconaut:castle-solid",
	});
}

export default Component;
