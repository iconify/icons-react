import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/legllacph.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="legllacph"/>`,
		"fallback": "pixelarticons:align-horizontal-distribute-end",
	});
}

export default Component;
