import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/r/rejp779da.css';
import '../../css/r/rhpm35e7g.css';
import '../../css/o/ooh_a9jzm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="rejp779da"/><path class="rhpm35e7g"/><path class="ooh_a9jzm"/></g>`,
		"fallback": "solar:columns-3-cog-outline",
	});
}

export default Component;
