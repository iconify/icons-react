import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/ma2gzy3et.css';
import '../../css/t/tpblc1bjs.css';
import '../../css/q/qsvxid4dc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ma2gzy3et"/><path class="tpblc1bjs"/><path class="qsvxid4dc"/>`,
		"fallback": "solar:corkscrew-bold-duotone",
	});
}

export default Component;
