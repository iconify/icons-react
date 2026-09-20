import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/q/qxd9onbvp.css';
import '../../css/p/prf029bam.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="qxd9onbvp"/><path class="prf029bam"/></g>`,
		"fallback": "keyline-icons:handbag-sharp-two-tone",
	});
}

export default Component;
