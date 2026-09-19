import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/txpoe7bfd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="txpoe7bfd"/>`,
		"fallback": "hugeicons:ease-in",
	});
}

export default Component;
