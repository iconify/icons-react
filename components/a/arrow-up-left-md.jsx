import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sebtakxcp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sebtakxcp"/>`,
		"fallback": "ci:arrow-up-left-md",
	});
}

export default Component;
