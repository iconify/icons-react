import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sf5x249yi.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sf5x249yi"/>`,
		"fallback": "whh:fontcaligraphy",
	});
}

export default Component;
