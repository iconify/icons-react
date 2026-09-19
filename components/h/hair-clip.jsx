import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/r/rnrwwphky.css';
import '../../css/c/c5c45-bwn.css';
import '../../css/s/sz4h7_bkz.css';
import '../../css/o/ont_6k0ft.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="rnrwwphky"/><path class="c5c45-bwn"/><path class="sz4h7_bkz"/><path class="ont_6k0ft"/></g>`,
		"fallback": "icon-park:hair-clip",
	});
}

export default Component;
