import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xw0es_b_c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xw0es_b_c"/>`,
		"fallback": "griddy-icons:arrow-circle-left",
	});
}

export default Component;
