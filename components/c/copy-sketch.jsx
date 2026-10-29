import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/z/zp2593bpl.css';
import '../../css/v/v-n2grb0r.css';
import '../../css/x/xa8yffp9t.css';
import '../../css/j/jchcoxbow.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="zp2593bpl"/><path class="v-n2grb0r wm-a"/><path class="wm-k xa8yffp9t"/><path class="jchcoxbow wm-a"/></g>`,
		"fallback": "withicons:copy-sketch",
	});
}

export default Component;
