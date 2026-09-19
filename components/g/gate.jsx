import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3lph30dl.css';
import '../../css/l/l7lnidbov.css';
import '../../css/h/hpy61ibco.css';
import '../../css/h/hnruecbth.css';
import '../../css/e/elgvdnb-n.css';
import '../../css/u/u8k-z40_y.css';
import '../../css/k/kgwu1rb5g.css';
import '../../css/x/xjdefmbpu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3lph30dl"><path class="l7lnidbov"/><path class="hpy61ibco"/><path class="hnruecbth"/><path class="elgvdnb-n"/><path class="u8k-z40_y"/><rect class="kgwu1rb5g"/><rect class="xjdefmbpu"/></g>`,
		"fallback": "icon-park:gate",
	});
}

export default Component;
