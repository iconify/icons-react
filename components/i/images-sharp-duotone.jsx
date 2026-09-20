import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/x/xtbju33sf.css';
import '../../css/z/z308c8bnb.css';
import '../../css/n/ne_lywboa.css';
import '../../css/y/y-gfmr48b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="xtbju33sf"/><path class="z308c8bnb"/><path class="ne_lywboa"/><path class="y-gfmr48b"/></g>`,
		"fallback": "keyline-icons:images-sharp-duotone",
	});
}

export default Component;
