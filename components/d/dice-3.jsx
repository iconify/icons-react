import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vd4_1pb7p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vd4_1pb7p"/>`,
		"fallback": "bxs:dice-3",
	});
}

export default Component;
