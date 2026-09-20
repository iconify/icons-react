import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sew795b9o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sew795b9o"/>`,
		"fallback": "mdi:alphabet-d",
	});
}

export default Component;
