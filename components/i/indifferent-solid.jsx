import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vq5p5vhri.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vq5p5vhri"/>`,
		"fallback": "mynaui:indifferent-solid",
	});
}

export default Component;
