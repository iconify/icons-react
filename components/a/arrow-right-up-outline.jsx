import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cib8es_1m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cib8es_1m"/>`,
		"fallback": "solar:arrow-right-up-outline",
	});
}

export default Component;
