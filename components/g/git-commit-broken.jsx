import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/sduv6uq4w.css';
import '../../css/j/jlyo5qdkm.css';
import '../../css/s/scd6psb_b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="sduv6uq4w"/><path class="jlyo5qdkm"/><path class="scd6psb_b"/></g>`,
		"fallback": "solar:git-commit-broken",
	});
}

export default Component;
