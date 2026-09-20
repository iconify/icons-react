import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d5a3_uboz.css';
import '../../css/c/c2v7f4d8i.css';
import '../../css/b/bdly9ccqg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="d5a3_uboz"/><path class="c2v7f4d8i"/><path class="bdly9ccqg"/></g>`,
		"fallback": "lets-icons:file-duotone-line",
	});
}

export default Component;
