import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fi_h3obyz.css';
import '../../css/i/ie7ewgb8j.css';
import '../../css/i/iupmgbczu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="fi_h3obyz"/><path clip-rule="evenodd" class="ie7ewgb8j"/><path class="iupmgbczu"/></g>`,
		"fallback": "flowbite:file-doc-solid",
	});
}

export default Component;
