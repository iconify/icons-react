import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/smpgmkb8n.css';
import '../../css/i/iush4bsal.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="smpgmkb8n"/><path class="iush4bsal"/>`,
		"fallback": "openmoji:end-arrow",
	});
}

export default Component;
