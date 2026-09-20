import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jb-vexa9f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jb-vexa9f"/>`,
		"fallback": "si:ai-alt-1-fill",
	});
}

export default Component;
