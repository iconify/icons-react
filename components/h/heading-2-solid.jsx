import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w5a-dr2_g.css';
import '../../css/i/i7sr6ubzr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w5a-dr2_g"/><path class="i7sr6ubzr"/>`,
		"fallback": "pixel:heading-2-solid",
	});
}

export default Component;
