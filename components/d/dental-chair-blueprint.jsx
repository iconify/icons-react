import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/x/xx73ektwa.css';
import '../../css/c/cf3uzcrzx.css';
import '../../css/x/xzz2xub-s.css';
import '../../css/j/j0_wut__k.css';
import '../../css/i/irk70o-cb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="wm-deco xx73ektwa"/><path class="cf3uzcrzx wm-deco"/><path class="wm-k xzz2xub-s"/><path class="j0_wut__k wm-a"/><path class="irk70o-cb wm-k"/></g>`,
		"fallback": "withicons:dental-chair-blueprint",
	});
}

export default Component;
