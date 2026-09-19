import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t1q54p-0p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t1q54p-0p"/>`,
		"fallback": "heroicons:computer-desktop",
	});
}

export default Component;
