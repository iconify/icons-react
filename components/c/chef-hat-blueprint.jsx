import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/q/qtkr0rbqo.css';
import '../../css/v/vd71wsy9k.css';
import '../../css/v/v4vfc_ejn.css';
import '../../css/n/n29qef99r.css';
import '../../css/y/yqkivob1m.css';
import '../../css/i/iacmcuu9f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="qtkr0rbqo wm-deco"/><path class="vd71wsy9k wm-deco"/><path class="v4vfc_ejn wm-deco"/><path class="n29qef99r wm-k"/><path class="wm-a yqkivob1m"/><path class="iacmcuu9f wm-k"/></g>`,
		"fallback": "withicons:chef-hat-blueprint",
	});
}

export default Component;
