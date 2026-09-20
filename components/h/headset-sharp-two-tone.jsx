import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/k/k8pnmpluo.css';
import '../../css/v/vya9v3a2h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="k8pnmpluo"/><path class="vya9v3a2h"/></g>`,
		"fallback": "keyline-icons:headset-sharp-two-tone",
	});
}

export default Component;
