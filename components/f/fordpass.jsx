import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lfr9t6j2j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lfr9t6j2j"/>`,
		"fallback": "cbi:fordpass",
	});
}

export default Component;
