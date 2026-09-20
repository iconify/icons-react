import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rznhs0r4r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rznhs0r4r"/>`,
		"fallback": "tabler:bubble-plus",
	});
}

export default Component;
