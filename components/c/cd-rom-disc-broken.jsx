import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/w/wjd95_bar.css';
import '../../css/e/egctnk0pt.css';
import '../../css/g/gf5qrfb2j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="wjd95_bar"/><path class="egctnk0pt"/><path class="gf5qrfb2j"/></g>`,
		"fallback": "streamline-freehand-color:cd-rom-disc-broken",
	});
}

export default Component;
