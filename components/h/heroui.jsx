import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lkl3x0lvt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lkl3x0lvt"/>`,
		"fallback": "thesvg:heroui",
	});
}

export default Component;
