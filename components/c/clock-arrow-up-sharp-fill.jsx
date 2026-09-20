import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/i/i5kj9-bcx.css';
import '../../css/m/md27q_5nr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path clip-rule="evenodd" class="i5kj9-bcx"/><path class="md27q_5nr"/></g>`,
		"fallback": "keyline-icons:clock-arrow-up-sharp-fill",
	});
}

export default Component;
