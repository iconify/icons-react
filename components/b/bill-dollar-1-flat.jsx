import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/k/k6mo8actu.css';
import '../../css/h/hq_6i5iyq.css';
import '../../css/y/ywareo_of.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="k6mo8actu"/><path class="hq_6i5iyq"/><path class="ywareo_of"/></g>`,
		"fallback": "streamline-sharp-color:bill-dollar-1-flat",
	});
}

export default Component;
