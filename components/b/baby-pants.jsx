import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/p/pwk37mbjh.css';
import '../../css/b/bn5r6w_wn.css';
import '../../css/x/xtspv7bqw.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGQUzsH5So"><g class="v3_i3wktz"><path class="pwk37mbjh"/><path class="bn5r6w_wn"/><path class="xtspv7bqw"/></g></mask></defs><path mask="url(#SVGQUzsH5So)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:baby-pants",
	});
}

export default Component;
