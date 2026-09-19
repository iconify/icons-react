import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tym80lb0p.css';

const viewBox = {"width":21,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tym80lb0p"/>`,
		"fallback": "fontisto:discord",
	});
}

export default Component;
