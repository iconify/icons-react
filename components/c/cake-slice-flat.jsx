import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/stijuvbvx.css';
import '../../css/s/sy_1yybyr.css';
import '../../css/l/ljm1kubup.css';
import '../../css/f/fpp-sqvto.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="stijuvbvx"/><path class="sy_1yybyr"/><path class="ljm1kubup"/><path class="fpp-sqvto"/></g>`,
		"fallback": "streamline-plump-color:cake-slice-flat",
	});
}

export default Component;
