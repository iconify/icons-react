import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lr5v-mbai.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lr5v-mbai"/>`,
		"fallback": "reicon:arrow-up-left-filled",
	});
}

export default Component;
