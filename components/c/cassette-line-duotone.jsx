import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/f/fi1yetb4b.css';
import '../../css/h/h2d4pdb2l.css';
import '../../css/b/bpzc85b7j.css';
import '../../css/j/jiw1pkbmf.css';
import '../../css/g/gt5w69btr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="fi1yetb4b"/><path class="h2d4pdb2l"/><path class="bpzc85b7j"/><path class="jiw1pkbmf"/><path class="gt5w69btr"/></g>`,
		"fallback": "solar:cassette-line-duotone",
	});
}

export default Component;
