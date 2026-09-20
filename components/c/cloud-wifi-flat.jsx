import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/d/dpkn79b4d.css';
import '../../css/w/wssjsuaxv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="dpkn79b4d"/><path class="wssjsuaxv"/></g>`,
		"fallback": "streamline-sharp-color:cloud-wifi-flat",
	});
}

export default Component;
