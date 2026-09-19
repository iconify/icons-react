import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/h/hgyr1h5yj.css';
import '../../css/x/x8wodkbrz.css';
import '../../css/w/wve1_ubeu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="hgyr1h5yj"/><path class="x8wodkbrz"/><path class="wve1_ubeu"/></g>`,
		"fallback": "icon-park-solid:chair",
	});
}

export default Component;
