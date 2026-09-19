import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/r/rwpufsici.css';
import '../../css/u/ue4yllbit.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><path class="rwpufsici"/><path class="ue4yllbit"/></g>`,
		"fallback": "icon-park:config",
	});
}

export default Component;
