import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/odcwg15-y.css';
import '../../css/g/gg2r2xahj.css';
import '../../css/c/cdtw6obng.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="odcwg15-y"/><path clip-rule="evenodd" class="gg2r2xahj"/><path clip-rule="evenodd" class="cdtw6obng"/><path class="mo5netbri"/></g>`,
		"fallback": "pepicons-print:gear-off",
	});
}

export default Component;
