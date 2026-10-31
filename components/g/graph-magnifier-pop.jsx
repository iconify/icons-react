import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fesy9nboh.css';
import '../../css/z/z_lc1ja9y.css';
import '../../css/f/fwb1fj9xx.css';
import '../../css/p/p7jqmjblr.css';
import '../../css/d/dhpe_idlm.css';
import '../../css/z/zrxtwl66l.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fesy9nboh"/><path class="z_lc1ja9y"/><path class="fwb1fj9xx"/><path class="p7jqmjblr"/><path class="dhpe_idlm"/><path class="zrxtwl66l"/></g>`,
		"fallback": "streamline-kameleon-color:graph-magnifier-pop",
	});
}

export default Component;
