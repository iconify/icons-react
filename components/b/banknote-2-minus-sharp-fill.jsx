import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/l/lsbkd1bnn.css';
import '../../css/e/etugwackk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path clip-rule="evenodd" class="lsbkd1bnn"/><path class="etugwackk"/></g>`,
		"fallback": "keyline-icons:banknote-2-minus-sharp-fill",
	});
}

export default Component;
