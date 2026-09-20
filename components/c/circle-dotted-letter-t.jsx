import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hpr_y2baf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hpr_y2baf"/>`,
		"fallback": "tabler:circle-dotted-letter-t",
	});
}

export default Component;
