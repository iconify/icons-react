import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s_8_z1bkh.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s_8_z1bkh"/>`,
		"fallback": "lsicon:amount-yuan-outline",
	});
}

export default Component;
