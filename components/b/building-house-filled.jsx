import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pajg_d3no.css';
import '../../css/n/nwz75bygh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pajg_d3no"/><path class="nwz75bygh"/>`,
		"fallback": "boxicons:building-house-filled",
	});
}

export default Component;
