import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/txmg3z5ga.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="txmg3z5ga"/>`,
		"fallback": "hugeicons:folder-archive",
	});
}

export default Component;
