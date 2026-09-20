import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m8f1l-gan.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m8f1l-gan"/>`,
		"fallback": "tabler:border-corner-square",
	});
}

export default Component;
