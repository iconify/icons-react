import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/srsk4ib4t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="srsk4ib4t"/>`,
		"fallback": "thesvg:borgbackup",
	});
}

export default Component;
