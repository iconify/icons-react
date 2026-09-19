import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fa_p6gi4e.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fa_p6gi4e"/>`,
		"fallback": "gis:earth-net-o",
	});
}

export default Component;
