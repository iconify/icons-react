import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/pn3r5cchg.css';
import '../../css/z/z8g2jgblp.css';
import '../../css/y/yn-57bboo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><circle class="pn3r5cchg"/><path class="z8g2jgblp"/><circle class="yn-57bboo"/></g>`,
		"fallback": "lucide:divide",
	});
}

export default Component;
