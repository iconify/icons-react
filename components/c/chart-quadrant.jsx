import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/swfff6brw.css';
import '../../css/h/hwy63jppz.css';
import '../../css/r/rogiyybxj.css';
import '../../css/a/alf6uubgl.css';
import '../../css/l/le5satbnh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="swfff6brw"/><circle class="hwy63jppz"/><circle class="rogiyybxj"/><circle class="alf6uubgl"/><circle class="le5satbnh"/></g>`,
		"fallback": "lucide:chart-quadrant",
	});
}

export default Component;
