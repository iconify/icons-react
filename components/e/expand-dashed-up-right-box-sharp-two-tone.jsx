import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/l/lqs4ef90h.css';
import '../../css/b/bpjp17mqm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="lqs4ef90h"/><path class="bpjp17mqm"/></g>`,
		"fallback": "keyline-icons:expand-dashed-up-right-box-sharp-two-tone",
	});
}

export default Component;
