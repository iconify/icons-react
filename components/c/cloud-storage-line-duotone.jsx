import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/g/gwj2w_bps.css';
import '../../css/q/q7aor7big.css';
import '../../css/c/cehgcdc1k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="gwj2w_bps"/><path class="q7aor7big"/><path class="cehgcdc1k"/></g>`,
		"fallback": "solar:cloud-storage-line-duotone",
	});
}

export default Component;
