import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wc-gqt2en.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wc-gqt2en"/>`,
		"fallback": "pixelarticons:align-vertical-justify-start-sharp",
	});
}

export default Component;
