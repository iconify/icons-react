import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lx0ln9bfg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lx0ln9bfg"/>`,
		"fallback": "pixelarticons:briefcase",
	});
}

export default Component;
