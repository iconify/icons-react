import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u8g-wib6r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u8g-wib6r"/>`,
		"fallback": "lucide-lab:bear-face",
	});
}

export default Component;
