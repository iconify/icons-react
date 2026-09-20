import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e_rdtob6k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="e_rdtob6k"/>`,
		"fallback": "reicon:crown-2-filled",
	});
}

export default Component;
