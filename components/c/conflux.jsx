import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o11i93z8m.css';
import '../../css/x/xtw1k2b2d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o11i93z8m"/><path class="xtw1k2b2d"/>`,
		"fallback": "token:conflux",
	});
}

export default Component;
