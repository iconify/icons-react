import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i2h70hpmc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i2h70hpmc"/>`,
		"fallback": "mono-icons:edit-alt",
	});
}

export default Component;
