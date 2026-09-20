import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cd_-2rbla.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cd_-2rbla"/>`,
		"fallback": "si:align-right-detailed-line",
	});
}

export default Component;
