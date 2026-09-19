import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/iupmgbczu.css';
import '../../css/s/se96y7rhp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="iupmgbczu"/><path clip-rule="evenodd" class="se96y7rhp"/></g>`,
		"fallback": "flowbite:file-check-solid",
	});
}

export default Component;
