import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/x/xg1a86kbb.css';
import '../../css/k/korc1hs3g.css';
import '../../css/c/ct8ahg6rh.css';
import '../../css/r/rzkeqkbxd.css';
import '../../css/t/tcjvbpb5r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="wm-deco xg1a86kbb"/><path class="korc1hs3g wm-deco"/><path class="ct8ahg6rh wm-deco"/><path class="rzkeqkbxd wm-k"/><path class="tcjvbpb5r wm-a"/></g>`,
		"fallback": "withicons:gamepad-blueprint",
	});
}

export default Component;
