import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ngoscyb5h.css';
import '../../css/a/afo7_lbhx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ngoscyb5h"/><path class="afo7_lbhx"/>`,
		"fallback": "bx:bx-cog",
	});
}

export default Component;
