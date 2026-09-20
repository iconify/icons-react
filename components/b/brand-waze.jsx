import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/dmz6lfbta.css';
import '../../css/f/flvnzbt7i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="dmz6lfbta"/><path class="flvnzbt7i"/></g>`,
		"fallback": "tabler:brand-waze",
	});
}

export default Component;
