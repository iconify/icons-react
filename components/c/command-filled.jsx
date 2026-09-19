import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v-sd6dlux.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v-sd6dlux"/>`,
		"fallback": "boxicons:command-filled",
	});
}

export default Component;
