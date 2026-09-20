import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/s/smghx7b8z.css';
import '../../css/c/cabat7cid.css';
import '../../css/v/v47inkcbn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><g class="mc2zb0bvp"><path class="smghx7b8z"/><path class="cabat7cid"/></g><path class="v47inkcbn"/></g>`,
		"fallback": "solar:git-commit-bold-duotone",
	});
}

export default Component;
