import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/e/earrbj3fg.css';
import '../../css/m/mf-bwtqvv.css';
import '../../css/e/euehnt70u.css';
import '../../css/k/k36k424ts.css';
import '../../css/i/i8oxa2v3o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><g class="mc2zb0bvp"><path class="earrbj3fg"/><path class="mf-bwtqvv"/><path class="euehnt70u"/><path class="k36k424ts"/></g><path clip-rule="evenodd" class="i8oxa2v3o"/></g>`,
		"fallback": "solar:cup-hot-bold-duotone",
	});
}

export default Component;
