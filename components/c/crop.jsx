import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lmg3tgb0s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lmg3tgb0s"/>`,
		"fallback": "pixelarticons:crop",
	});
}

export default Component;
