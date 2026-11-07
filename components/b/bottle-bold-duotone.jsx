import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ig8ga7b3p.css';
import '../../css/r/r-u6g9bnb.css';
import '../../css/s/s1gudszho.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ig8ga7b3p"/><path class="r-u6g9bnb"/><path class="s1gudszho"/>`,
		"fallback": "solar:bottle-bold-duotone",
	});
}

export default Component;
