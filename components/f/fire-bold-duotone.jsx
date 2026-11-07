import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wole6hbze.css';
import '../../css/e/egno4qbun.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wole6hbze"/><path class="egno4qbun"/>`,
		"fallback": "solar:fire-bold-duotone",
	});
}

export default Component;
