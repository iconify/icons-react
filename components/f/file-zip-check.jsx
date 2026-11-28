import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l4pjlpbck.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l4pjlpbck"/>`,
		"fallback": "noviair-light:file-zip-check",
	});
}

export default Component;
