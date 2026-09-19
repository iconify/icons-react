import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vbysqvbca.css';
import '../../css/h/hc6km55hv.css';
import '../../css/t/t42vibcgb.css';
import '../../css/r/rx7y-rb9m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vbysqvbca"/><path clip-rule="evenodd" class="hc6km55hv"/><path class="t42vibcgb"/><path clip-rule="evenodd" class="rx7y-rb9m"/></g>`,
		"fallback": "healthicons:blood-cells-outline-24px",
	});
}

export default Component;
