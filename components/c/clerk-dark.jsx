import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1mjunbsu.css';
import '../../css/c/ce9wo0wqz.css';
import '../../css/s/s_xed7b6t.css';
import '../../css/i/ie__sd2_z.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1mjunbsu"><circle class="ce9wo0wqz"/><path class="s_xed7b6t"/><path class="ie__sd2_z"/></g>`,
		"fallback": "thesvg-color:clerk-dark",
	});
}

export default Component;
