import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oo8fb39gf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oo8fb39gf"/>`,
		"fallback": "coolicons:circle-chevron-down-fill-round",
	});
}

export default Component;
