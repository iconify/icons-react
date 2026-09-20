import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/ak_npccsm.css';
import '../../css/n/n14m7qbat.css';
import '../../css/s/sb5o2gexg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="ak_npccsm"/><circle class="n14m7qbat"/><circle class="sb5o2gexg"/></g>`,
		"fallback": "proicons:instagram",
	});
}

export default Component;
