import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o98ro-b0q.css';
import '../../css/q/qgy99obou.css';
import '../../css/r/r17ye20_y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="o98ro-b0q"/><path clip-rule="evenodd" class="qgy99obou"/><path class="r17ye20_y"/></g>`,
		"fallback": "lets-icons:img-out-box-light",
	});
}

export default Component;
