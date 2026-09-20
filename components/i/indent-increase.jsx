import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/crk05fz0x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="crk05fz0x"/>`,
		"fallback": "tabler:indent-increase",
	});
}

export default Component;
