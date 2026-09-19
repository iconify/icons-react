import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/egkp_3bbf.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="egkp_3bbf"/>`,
		"fallback": "ei:chevron-down",
	});
}

export default Component;
