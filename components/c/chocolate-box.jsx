import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/j/jmroy3ati.css';
import '../../css/l/l6i4z6k_y.css';
import '../../css/u/uh01hzbyb.css';
import '../../css/s/s5fsn4tdx.css';
import '../../css/x/xc_je6bwo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="jmroy3ati"/><path class="l6i4z6k_y wm-shine"/><path class="uh01hzbyb wm-k"/><path class="s5fsn4tdx wm-a"/><path class="wm-deco xc_je6bwo"/></g>`,
		"fallback": "withicons-kawaii:chocolate-box",
	});
}

export default Component;
