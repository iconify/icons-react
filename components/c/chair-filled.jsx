import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ub-8msbxg.css';
import '../../css/u/u68we71_t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="ub-8msbxg"/><path class="u68we71_t"/>`,
		"fallback": "boxicons:chair-filled",
	});
}

export default Component;
