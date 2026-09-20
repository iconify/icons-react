import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/k/kl5vzlbeh.css';
import '../../css/f/f_ke3lb8f.css';
import '../../css/w/wnizvsbrr.css';
import '../../css/w/wkgrmwbkn.css';
import '../../css/c/cvby0_bwx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="kl5vzlbeh"/><path class="f_ke3lb8f"/><path class="wnizvsbrr"/><path class="wkgrmwbkn"/><path class="cvby0_bwx"/></g>`,
		"fallback": "streamline-ultimate:database-1",
	});
}

export default Component;
