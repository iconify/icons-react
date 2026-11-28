import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xxr_mew3m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="primary xxr_mew3m"/>`,
		"fallback": "iconaut:heptagon-duotone",
	});
}

export default Component;
