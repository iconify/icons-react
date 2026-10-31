import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oxlevfbzg.css';
import '../../css/p/p49uikb1r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="oxlevfbzg"/><path class="p49uikb1r"/></g>`,
		"fallback": "coolicons:ghost-duotone-round",
	});
}

export default Component;
