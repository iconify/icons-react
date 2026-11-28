import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i6ilb7ewq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i6ilb7ewq"/>`,
		"fallback": "iconaut:circle-number-9-solid",
	});
}

export default Component;
