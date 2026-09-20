import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/ya_55rppu.css';
import '../../css/i/iqjs4bb3i.css';
import '../../css/i/izu-3zniy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ya_55rppu"/><path class="iqjs4bb3i"/><path class="izu-3zniy"/></g>`,
		"fallback": "solar:file-check-bold-duotone",
	});
}

export default Component;
