import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zsf-4ub0j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zsf-4ub0j"/>`,
		"fallback": "tabler:arrow-big-down-lines-filled",
	});
}

export default Component;
