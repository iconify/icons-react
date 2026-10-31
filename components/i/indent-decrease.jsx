import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/n/n1qktjb3p.css';
import '../../css/t/txjglpbqa.css';
import '../../css/s/sfhxn_bcr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="n1qktjb3p wm-shadow"/><path class="txjglpbqa wm-shadow"/><path class="sfhxn_bcr"/></g>`,
		"fallback": "withicons-brutal:indent-decrease",
	});
}

export default Component;
