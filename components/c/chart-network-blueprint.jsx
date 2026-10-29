import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/k/k7e9fxb5e.css';
import '../../css/m/mvi8grbak.css';
import '../../css/b/bnjyj2b6y.css';
import '../../css/z/zhq9nbcqz.css';
import '../../css/l/lrg-fdc4r.css';
import '../../css/u/uqhmd6bht.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="k7e9fxb5e wm-deco"/><path class="mvi8grbak wm-deco"/><path class="bnjyj2b6y wm-deco"/><path class="wm-k zhq9nbcqz"/><path class="lrg-fdc4r wm-a"/><path class="uqhmd6bht wm-a"/></g>`,
		"fallback": "withicons:chart-network-blueprint",
	});
}

export default Component;
