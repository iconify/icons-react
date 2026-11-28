import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iimok1l1z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iimok1l1z"/>`,
		"fallback": "noviair:box-open-check",
	});
}

export default Component;
