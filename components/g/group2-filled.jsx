import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tb5ln68hg.css';
import '../../css/h/h28nogbso.css';
import '../../css/s/snrj8yb8c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="tb5ln68hg"/><path class="h28nogbso"/><path class="snrj8yb8c"/></g>`,
		"fallback": "reicon:group2-filled",
	});
}

export default Component;
