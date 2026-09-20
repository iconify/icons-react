import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ty76s9bfl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ty76s9bfl"/>`,
		"fallback": "pixelarticons:circle-pile",
	});
}

export default Component;
