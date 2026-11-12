import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t3m4_fb3n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t3m4_fb3n"/>`,
		"fallback": "tabler:building-bolt",
	});
}

export default Component;
