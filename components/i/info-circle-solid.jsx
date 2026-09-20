import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u19voll5x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u19voll5x"/>`,
		"fallback": "mynaui:info-circle-solid",
	});
}

export default Component;
