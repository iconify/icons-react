import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/q/q68xhu0of.css';
import '../../css/a/az-eq3rud.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="q68xhu0of"/><path class="az-eq3rud"/></g>`,
		"fallback": "keyline-icons:book-check-sharp-two-tone",
	});
}

export default Component;
