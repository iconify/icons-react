import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uvgc2mbbg.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uvgc2mbbg"/>`,
		"fallback": "f7:arrow-counterclockwise-circle-fill",
	});
}

export default Component;
