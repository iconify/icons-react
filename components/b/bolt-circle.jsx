import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/phur5pbvn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="phur5pbvn"/>`,
		"fallback": "bxs:bolt-circle",
	});
}

export default Component;
