import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k8_c_mu8e.css';
import '../../css/u/u6vbtabfy.css';
import '../../css/t/tchhv6w5u.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="k8_c_mu8e"/><path class="u6vbtabfy"/><path clip-rule="evenodd" class="tchhv6w5u"/></g>`,
		"fallback": "streamline-color:hotel-air-conditioner-flat",
	});
}

export default Component;
