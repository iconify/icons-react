import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nqphrh6lz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nqphrh6lz"/>`,
		"fallback": "iconaut:devices-solid",
	});
}

export default Component;
