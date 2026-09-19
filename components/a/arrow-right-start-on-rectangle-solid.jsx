import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/inbfl_ipd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="inbfl_ipd"/>`,
		"fallback": "heroicons:arrow-right-start-on-rectangle-solid",
	});
}

export default Component;
