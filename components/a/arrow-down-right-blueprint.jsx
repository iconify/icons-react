import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/b/bpsw8v14a.css';
import '../../css/u/uoytabc7k.css';
import '../../css/d/dv6985bnq.css';
import '../../css/q/qkqg5hbxb.css';
import '../../css/u/u56u56yyt.css';
import '../../css/t/t2yjpvl2n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="bpsw8v14a wm-deco"/><path class="uoytabc7k wm-deco"/><path class="dv6985bnq wm-k"/><path class="qkqg5hbxb wm-a"/><path class="u56u56yyt wm-k"/><path class="t2yjpvl2n wm-a"/></g>`,
		"fallback": "withicons:arrow-down-right-blueprint",
	});
}

export default Component;
