import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ixgsn8v-s.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ixgsn8v-s"/>`,
		"fallback": "devicon-plain:forgejo-wordmark",
	});
}

export default Component;
