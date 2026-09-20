import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mxj4z7b4j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mxj4z7b4j"/>`,
		"fallback": "tabler:circle-dashed-check",
	});
}

export default Component;
