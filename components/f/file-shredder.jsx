import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fj2bybctk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fj2bybctk"/>`,
		"fallback": "hugeicons:file-shredder",
	});
}

export default Component;
