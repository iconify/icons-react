import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a902pnkph.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a902pnkph"/>`,
		"fallback": "noviair-light:bandage",
	});
}

export default Component;
