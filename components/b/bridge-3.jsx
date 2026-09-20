import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m8zu3ni0t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="m8zu3ni0t"/>`,
		"fallback": "lineicons:bridge-3",
	});
}

export default Component;
