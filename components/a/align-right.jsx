import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/of83378bv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="of83378bv"/>`,
		"fallback": "uim:align-right",
	});
}

export default Component;
