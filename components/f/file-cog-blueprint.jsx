import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/b/bbt5j9hvr.css';
import '../../css/j/jkraf_bfb.css';
import '../../css/n/no9v5ebsc.css';
import '../../css/i/i5os5_b2m.css';
import '../../css/b/buaqtwbfz.css';
import '../../css/s/swvx27coy.css';
import '../../css/f/fxix_iiqi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="bbt5j9hvr wm-deco"/><path class="jkraf_bfb wm-deco"/><path class="no9v5ebsc wm-deco"/><path class="i5os5_b2m wm-k"/><path class="buaqtwbfz wm-a"/><path class="swvx27coy wm-s"/><path class="fxix_iiqi wm-k"/></g>`,
		"fallback": "withicons:file-cog-blueprint",
	});
}

export default Component;
