import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/u/ufn3m0bhg.css';
import '../../css/h/hfgvspbxq.css';
import '../../css/c/cf3uzcrzx.css';
import '../../css/b/bz_co8e9x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="ufn3m0bhg wm-deco"/><path class="hfgvspbxq wm-deco"/><path class="cf3uzcrzx wm-deco"/><path class="bz_co8e9x"/></g>`,
		"fallback": "withicons:gift-blueprint",
	});
}

export default Component;
