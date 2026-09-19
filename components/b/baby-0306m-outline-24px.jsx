import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fagdp1b6g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fagdp1b6g"/>`,
		"fallback": "healthicons:baby-0306m-outline-24px",
	});
}

export default Component;
