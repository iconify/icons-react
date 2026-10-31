import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nu_pywb_w.css';
import '../../css/d/diu_rvd7f.css';
import '../../css/s/sztat3bpd.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nu_pywb_w"/><path class="diu_rvd7f"/><path class="sztat3bpd"/>`,
		"fallback": "tabler-flags:commonwealth-of-independent-states",
	});
}

export default Component;
