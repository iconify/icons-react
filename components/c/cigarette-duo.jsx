import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zos92rv0b.css';
import '../../css/v/v5ccan78b.css';
import '../../css/u/udd6z_bpp.css';
import '../../css/m/mng7bdcmm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zos92rv0b"/><path class="v5ccan78b"/><path class="udd6z_bpp"/><path class="mng7bdcmm"/></g>`,
		"fallback": "streamline-kameleon-color:cigarette-duo",
	});
}

export default Component;
