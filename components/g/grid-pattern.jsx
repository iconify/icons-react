import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dfy8v3bkp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dfy8v3bkp"/>`,
		"fallback": "tabler:grid-pattern",
	});
}

export default Component;
