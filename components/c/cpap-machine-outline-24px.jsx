import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/na8yocb5m.css';
import '../../css/i/iylt3-bdh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="na8yocb5m"/><path clip-rule="evenodd" class="iylt3-bdh"/></g>`,
		"fallback": "healthicons:cpap-machine-outline-24px",
	});
}

export default Component;
