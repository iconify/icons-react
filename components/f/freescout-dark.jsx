import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/ha514kb_d.css';

const viewBox = {"width":96,"height":96};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ha514kb_d"/>`,
		"fallback": "thesvg-color:freescout-dark",
	});
}

export default Component;
