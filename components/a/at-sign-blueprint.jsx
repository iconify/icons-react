import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/u/uiyjj6zbr.css';
import '../../css/o/o7-ag87sb.css';
import '../../css/p/pco18stpg.css';
import '../../css/e/ez41jfban.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="uiyjj6zbr wm-deco"/><path class="o7-ag87sb wm-deco"/><path class="pco18stpg"/><path class="ez41jfban"/></g>`,
		"fallback": "withicons:at-sign-blueprint",
	});
}

export default Component;
