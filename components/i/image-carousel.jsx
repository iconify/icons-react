import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z33w5xbvj.css';
import '../../css/t/tbq22ql4t.css';
import '../../css/l/l9zps-btr.css';
import '../../css/k/krip4lmfh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="z33w5xbvj"/><path class="tbq22ql4t"/><path class="l9zps-btr"/><path class="krip4lmfh"/></g>`,
		"fallback": "tdesign:image-carousel",
	});
}

export default Component;
