import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/l/ltcazkbqu.css';
import '../../css/t/tp-yo7b2q.css';
import '../../css/a/aaymibb1x.css';
import '../../css/d/d6i3s2dnz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="ltcazkbqu wm-deco"/><path class="tp-yo7b2q wm-deco"/><path class="aaymibb1x wm-k"/><path class="d6i3s2dnz wm-a"/></g>`,
		"fallback": "withicons:git-commit-blueprint",
	});
}

export default Component;
