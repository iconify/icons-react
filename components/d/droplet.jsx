import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xiypgz6mv.css';
import '../../css/c/crk3_5bxq.css';
import '../../css/g/g1m9kmphj.css';
import '../../css/j/j-73v80cn.css';
import '../../css/m/mmr8vch3f.css';
import '../../css/b/bs6owgmoj.css';
import '../../css/j/jszb8hbdm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><radialGradient id="SVGHAu9JdDT" cx="82.6" cy="66.8" r="140.8" gradientUnits="userSpaceOnUse"><stop offset="0" class="xiypgz6mv"/><stop offset=".85" class="crk3_5bxq"/><stop offset="1" class="crk3_5bxq"/></radialGradient></defs><g transform="matrix(2.5 0 0 2.5 5.71 1.01)"><path class="g1m9kmphj"/><path fill="url(#SVGHAu9JdDT)" class="j-73v80cn"/><path class="mmr8vch3f"/><path class="bs6owgmoj"/><ellipse class="jszb8hbdm"/></g>`,
		"fallback": "xero-emoji:droplet",
	});
}

export default Component;
