import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xtt0z_z2x.css';
import '../../css/n/nfgkwnbpu.css';
import '../../css/s/soen5rbva.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xtt0z_z2x"/><path class="nfgkwnbpu"/><path class="soen5rbva"/>`,
		"fallback": "fxemoji:cjkunifiedideograph-e",
	});
}

export default Component;
