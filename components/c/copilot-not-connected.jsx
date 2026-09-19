import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gtycj1ond.css';
import '../../css/h/h_5f6couv.css';
import '../../css/l/ludnwn2qt.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="gtycj1ond"/><path clip-rule="evenodd" class="h_5f6couv"/><path clip-rule="evenodd" class="ludnwn2qt"/></g>`,
		"fallback": "codicon:copilot-not-connected",
	});
}

export default Component;
