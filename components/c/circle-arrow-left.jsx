import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ir2h2kauu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ir2h2kauu"/>`,
		"fallback": "tabler:circle-arrow-left",
	});
}

export default Component;
