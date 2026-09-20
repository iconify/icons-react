import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/auesgq7ai.css';
import '../../css/m/mbz4busmg.css';
import '../../css/d/dwlsvjb6y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="auesgq7ai"/><path class="mbz4busmg"/><path class="dwlsvjb6y"/></g>`,
		"fallback": "tdesign:castle-1",
	});
}

export default Component;
