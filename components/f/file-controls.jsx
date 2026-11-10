import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lzprh8bwb.css';
import '../../css/q/q3qf77bbq.css';
import '../../css/l/lwk_2--7f.css';
import '../../css/k/k_in4bc0v.css';
import '../../css/d/d4obqubwa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="lzprh8bwb"/><path class="q3qf77bbq"/><path class="lwk_2--7f"/><circle class="k_in4bc0v"/><circle class="d4obqubwa"/></g>`,
		"fallback": "andrsrxn:file-controls",
	});
}

export default Component;
