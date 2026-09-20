import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vcqxiub3p.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vcqxiub3p"/>`,
		"fallback": "lsicon:computer-across-outline",
	});
}

export default Component;
