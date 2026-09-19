import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/dr3en4b5i.css';
import '../../css/i/ighay767r.css';
import '../../css/d/du96umduy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="dr3en4b5i"/><path class="ighay767r"/><path class="du96umduy"/></g>`,
		"fallback": "hugeicons:folder-git2",
	});
}

export default Component;
