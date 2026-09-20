import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/s/sqcq2lvft.css';
import '../../css/q/qe5rklg2p.css';
import '../../css/m/m3qn-my9h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="sqcq2lvft"/><path class="qe5rklg2p"/><path class="m3qn-my9h"/></g>`,
		"fallback": "solar:folder-cog-outline",
	});
}

export default Component;
