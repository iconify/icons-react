import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/w-omgbcdx.css';
import '../../css/t/tt7vcqswa.css';
import '../../css/l/lczb851ux.css';
import '../../css/c/c9awzi9ko.css';
import '../../css/t/tzi-ertvs.css';
import '../../css/c/cew0judle.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="w-omgbcdx"/><path class="tt7vcqswa"/><path class="lczb851ux"/><path class="c9awzi9ko"/><path class="tzi-ertvs"/><path class="cew0judle"/></g>`,
		"fallback": "solar:grip-horizontal-outline",
	});
}

export default Component;
