import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8r6v-bvi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n8r6v-bvi"/>`,
		"fallback": "tabler:escalator-up",
	});
}

export default Component;
