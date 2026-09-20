import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/ho4bgebya.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ho4bgebya"/>`,
		"fallback": "pixelarticons:align-vertical-distribute-start-sharp",
	});
}

export default Component;
