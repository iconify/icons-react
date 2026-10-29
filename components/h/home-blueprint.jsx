import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/s/sbqd6ybgf.css';
import '../../css/a/adn2_vb7u.css';
import '../../css/o/o7-ag87sb.css';
import '../../css/p/pl3ab2bcj.css';
import '../../css/b/bx2-xs7ey.css';
import '../../css/w/wxsz58mcd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="sbqd6ybgf wm-deco"/><path class="adn2_vb7u wm-deco"/><path class="o7-ag87sb wm-deco"/><path class="pl3ab2bcj wm-k"/><path class="bx2-xs7ey wm-a"/><path class="wm-k wxsz58mcd"/></g>`,
		"fallback": "withicons:home-blueprint",
	});
}

export default Component;
