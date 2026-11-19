import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v276xibbz.css';
import '../../css/b/bt9-2rbpz.css';
import '../../css/k/kqbymubhs.css';
import '../../css/v/vu_cz2bpb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="v276xibbz"/><circle class="bt9-2rbpz"/><path class="kqbymubhs"/><path class="vu_cz2bpb"/></g>`,
		"fallback": "andrsrxn:chart-segmentation",
	});
}

export default Component;
