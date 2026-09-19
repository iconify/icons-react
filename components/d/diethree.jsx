import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rd_y6vbdc.css';

const viewBox = {"width":960,"height":959};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rd_y6vbdc"/>`,
		"fallback": "whh:diethree",
	});
}

export default Component;
