import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oy77pab_j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oy77pab_j"/>`,
		"fallback": "tabler:escalator-down",
	});
}

export default Component;
