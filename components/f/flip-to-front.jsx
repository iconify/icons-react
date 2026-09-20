import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wd8y_juzs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wd8y_juzs"/>`,
		"fallback": "pixelarticons:flip-to-front",
	});
}

export default Component;
