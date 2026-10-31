import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/c/c462w-vxo.css';
import '../../css/l/lhhfjfbtf.css';
import '../../css/z/zpodnwj0o.css';
import '../../css/s/s37zulbpr.css';
import '../../css/w/w49ngccqq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="c462w-vxo"/><path class="lhhfjfbtf wm-shine"/><path class="wm-k zpodnwj0o"/><path class="s37zulbpr wm-a"/><path class="w49ngccqq wm-deco"/></g>`,
		"fallback": "withicons-kawaii:bed",
	});
}

export default Component;
