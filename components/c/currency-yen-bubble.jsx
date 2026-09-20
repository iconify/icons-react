import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/s/sn5uk2bnn.css';
import '../../css/r/r_4rcsbxm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="sn5uk2bnn"/><path class="r_4rcsbxm"/></g>`,
		"fallback": "streamline-freehand:currency-yen-bubble",
	});
}

export default Component;
