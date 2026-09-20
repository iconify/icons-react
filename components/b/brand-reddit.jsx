import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/jhj41lbdb.css';
import '../../css/m/m66t7tb1e.css';
import '../../css/p/pl4zspb1h.css';
import '../../css/j/jf_r7ebtg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="jhj41lbdb"/><path class="m66t7tb1e"/><path class="pl4zspb1h"/><path class="jf_r7ebtg"/></g>`,
		"fallback": "tabler:brand-reddit",
	});
}

export default Component;
