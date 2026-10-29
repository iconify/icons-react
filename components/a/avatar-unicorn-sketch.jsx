import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/k/kda6is2bg.css';
import '../../css/x/xcl4by4_y.css';
import '../../css/s/s1pwchbtz.css';
import '../../css/c/c_pueebqi.css';
import '../../css/c/cpx80hnid.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="kda6is2bg"/><path class="wm-k xcl4by4_y"/><path class="s1pwchbtz wm-a"/><path class="c_pueebqi wm-k"/><path class="cpx80hnid wm-a"/></g>`,
		"fallback": "withicons:avatar-unicorn-sketch",
	});
}

export default Component;
