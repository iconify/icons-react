import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xyjtgccot.css';
import '../../css/f/fyx0x013q.css';
import '../../css/u/ux9pwvqah.css';
import '../../css/x/x6tlt5s8q.css';
import '../../css/m/m2m32f12q.css';
import '../../css/x/x-5wu40ay.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><g class="xyjtgccot"><path class="fyx0x013q"/><circle class="ux9pwvqah"/><circle class="x6tlt5s8q"/></g><path class="m2m32f12q"/><path clip-rule="evenodd" class="x-5wu40ay"/><path class="mo5netbri"/></g>`,
		"fallback": "pepicons-print:division-off",
	});
}

export default Component;
