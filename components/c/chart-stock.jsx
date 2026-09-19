import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/w/w4ve6ubaj.css';
import '../../css/o/okvxh899v.css';
import '../../css/b/bl418kbrk.css';
import '../../css/c/ckgpe_bsb.css';
import '../../css/h/he9x-gszn.css';
import '../../css/t/tdffaphfa.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGSARqObmw"><g class="v3_i3wktz"><path class="w4ve6ubaj"/><path class="okvxh899v"/><path class="bl418kbrk"/><path class="ckgpe_bsb"/><path class="he9x-gszn"/><path class="tdffaphfa"/></g></mask></defs><path mask="url(#SVGSARqObmw)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:chart-stock",
	});
}

export default Component;
