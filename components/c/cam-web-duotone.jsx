import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kvfik_buy.css';
import '../../css/r/r4odgsl7r.css';
import '../../css/y/yysrwvbxg.css';
import '../../css/n/nols4abef.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="kvfik_buy"/><circle class="r4odgsl7r"/><circle class="yysrwvbxg"/><path class="nols4abef"/></g>`,
		"fallback": "stash:cam-web-duotone",
	});
}

export default Component;
