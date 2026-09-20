import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xex2wub0q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xex2wub0q"/>`,
		"fallback": "mdi:beaker",
	});
}

export default Component;
