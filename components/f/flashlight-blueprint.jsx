import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/w/wttzmdugt.css';
import '../../css/l/ljg583bic.css';
import '../../css/f/f22o3bcfn.css';
import '../../css/g/gtc7_1b5f.css';
import '../../css/h/h4uzyibtm.css';
import '../../css/a/a5neubxnb.css';
import '../../css/w/wgr3hlb9e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="wm-deco wttzmdugt"/><path class="ljg583bic wm-deco"/><path class="f22o3bcfn wm-deco"/><path class="gtc7_1b5f wm-k"/><path class="h4uzyibtm wm-a"/><path class="a5neubxnb wm-s"/><path class="wgr3hlb9e wm-k"/></g>`,
		"fallback": "withicons:flashlight-blueprint",
	});
}

export default Component;
