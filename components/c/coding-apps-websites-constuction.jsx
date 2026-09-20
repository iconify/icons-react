import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/md0h0dbps.css';
import '../../css/l/loqdhccef.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="md0h0dbps"/><path class="loqdhccef"/>`,
		"fallback": "streamline-pixel:coding-apps-websites-constuction",
	});
}

export default Component;
