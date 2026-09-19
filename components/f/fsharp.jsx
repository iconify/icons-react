import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ptysjpnfo.css';
import '../../css/z/z3hk8xbow.css';
import '../../css/y/yadmzfb9b.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ptysjpnfo"/><path class="z3hk8xbow"/><path class="yadmzfb9b"/>`,
		"fallback": "devicon:fsharp",
	});
}

export default Component;
