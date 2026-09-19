import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/z/z8_mqecnt.css';
import '../../css/y/ydag_ubap.css';
import '../../css/o/oe_umpfom.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9cl3zbei"><path clip-rule="evenodd" class="z8_mqecnt"/><path class="ydag_ubap"/><path class="oe_umpfom"/></g>`,
		"fallback": "icon-park:caution",
	});
}

export default Component;
