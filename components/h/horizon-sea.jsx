import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z79hgub3x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z79hgub3x"/>`,
		"fallback": "boxicons:horizon-sea",
	});
}

export default Component;
