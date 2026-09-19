import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/iquz0lb-i.css';
import '../../css/s/sg2m-4w3o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="iquz0lb-i"/><path class="sg2m-4w3o"/></g>`,
		"fallback": "gg:arrows-expand-down-left",
	});
}

export default Component;
