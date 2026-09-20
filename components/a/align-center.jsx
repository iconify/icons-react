import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lh8pkjb0p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lh8pkjb0p"/>`,
		"fallback": "uil:align-center",
	});
}

export default Component;
