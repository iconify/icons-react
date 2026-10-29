import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/p/p9-7ckblj.css';
import '../../css/u/u1m5gl_1k.css';
import '../../css/c/cf3uzcrzx.css';
import '../../css/x/xlil4sgff.css';
import '../../css/y/yws8xlvol.css';
import '../../css/o/ovb5an6au.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="p9-7ckblj wm-deco"/><path class="u1m5gl_1k wm-deco"/><path class="cf3uzcrzx wm-deco"/><path class="wm-k xlil4sgff"/><path class="wm-a yws8xlvol"/><path class="ovb5an6au wm-a"/></g>`,
		"fallback": "withicons:candy-bucket-blueprint",
	});
}

export default Component;
