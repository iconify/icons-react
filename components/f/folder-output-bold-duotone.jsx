import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/roeabccht.css';
import '../../css/o/ohih_07gq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="roeabccht"/><path class="ohih_07gq"/></g>`,
		"fallback": "solar:folder-output-bold-duotone",
	});
}

export default Component;
