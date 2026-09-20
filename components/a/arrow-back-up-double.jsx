import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hzjwl8h6s.css';
import '../../css/s/syylq41ot.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="hzjwl8h6s"/><path class="syylq41ot"/></g>`,
		"fallback": "tabler:arrow-back-up-double",
	});
}

export default Component;
