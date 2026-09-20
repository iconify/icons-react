import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sycodhw1t.css';
import '../../css/e/eopq1pvol.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="sycodhw1t"/><path clip-rule="evenodd" class="eopq1pvol"/><path class="mo5netbri"/></g>`,
		"fallback": "pepicons-pencil:hash-off",
	});
}

export default Component;
