import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zgo4t5ztj.css';
import '../../css/k/kb1isbbpa.css';
import '../../css/v/vyta4abxx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zgo4t5ztj"/><path clip-rule="evenodd" class="kb1isbbpa"/><path class="vyta4abxx"/></g>`,
		"fallback": "streamline-plump-color:flashlight-flat",
	});
}

export default Component;
