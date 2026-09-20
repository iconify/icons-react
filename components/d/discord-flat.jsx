import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mocwhsbtp.css';
import '../../css/k/kkp449b3f.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mocwhsbtp"/><path clip-rule="evenodd" class="kkp449b3f"/></g>`,
		"fallback": "streamline-color:discord-flat",
	});
}

export default Component;
