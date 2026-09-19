import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/glo9mrbsy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="glo9mrbsy"/>`,
		"fallback": "boxicons:briefcase-alt-2",
	});
}

export default Component;
