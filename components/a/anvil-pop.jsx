import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/ks0wm7bii.css';
import '../../css/v/v8dvmtblp.css';
import '../../css/m/ma3g_absj.css';
import '../../css/s/sn4f23bsw.css';
import '../../css/u/uazbzlb_w.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ks0wm7bii"/><path class="v8dvmtblp"/><path class="ma3g_absj"/><path class="sn4f23bsw"/><path class="uazbzlb_w"/></g>`,
		"fallback": "streamline-kameleon-color:anvil-pop",
	});
}

export default Component;
