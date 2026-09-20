import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lp111nb_u.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lp111nb_u"/>`,
		"fallback": "pinhead:greenhouse",
	});
}

export default Component;
