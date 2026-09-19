import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bxl64k79c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bxl64k79c"/>`,
		"fallback": "griddy-icons:email-open-alt",
	});
}

export default Component;
