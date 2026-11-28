import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gdv_oev2s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gdv_oev2s"/>`,
		"fallback": "noviair:code-check",
	});
}

export default Component;
