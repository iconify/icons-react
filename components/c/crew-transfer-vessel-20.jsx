import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lhg7ko28s.css';
import '../../css/y/ywq58thzo.css';
import '../../css/o/oh1_vxmzz.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lhg7ko28s"/><path class="ywq58thzo"/><path class="oh1_vxmzz"/>`,
		"fallback": "energy-icons:crew-transfer-vessel-20",
	});
}

export default Component;
