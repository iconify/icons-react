import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lpre71u6z.css';
import '../../css/i/i19bypv0j.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lpre71u6z"/><path class="i19bypv0j"/>`,
		"fallback": "devicon:eslint",
	});
}

export default Component;
