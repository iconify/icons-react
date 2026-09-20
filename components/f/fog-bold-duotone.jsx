import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a1psxwbwe.css';
import '../../css/c/cwm5p46df.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/d/de5deccyd.css';
import '../../css/t/tqknh7bma.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="a1psxwbwe"/><path class="cwm5p46df"/><g class="mc2zb0bvp"><path class="de5deccyd"/><path class="tqknh7bma"/></g></g>`,
		"fallback": "solar:fog-bold-duotone",
	});
}

export default Component;
