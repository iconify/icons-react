import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cfj1x259w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cfj1x259w"/>`,
		"fallback": "noviair-light:files-check",
	});
}

export default Component;
