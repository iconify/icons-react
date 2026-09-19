import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vfm18fb_m.css';
import '../../css/w/w2mbxhs7a.css';
import '../../css/x/xhtfqplxc.css';
import '../../css/p/p3g_7hp9z.css';
import '../../css/r/rvfbosbgv.css';
import '../../css/s/sbtdt4vjj.css';
import '../../css/i/i1dqrvbos.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vfm18fb_m"/><path class="w2mbxhs7a"/><path class="xhtfqplxc"/><path class="p3g_7hp9z"/><path class="rvfbosbgv"/><path class="sbtdt4vjj"/><path class="i1dqrvbos"/>`,
		"fallback": "fxemoji:cowface",
	});
}

export default Component;
