import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i6g2-ok-g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i6g2-ok-g"/>`,
		"fallback": "akar-icons:heart",
	});
}

export default Component;
