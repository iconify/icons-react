import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/duc17k2td.css';
import '../../css/e/edr3z_b5u.css';
import '../../css/m/mingyz5ad.css';
import '../../css/e/e3cjgkfkd.css';
import '../../css/k/kspoj7vnd.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="duc17k2td"/><path class="edr3z_b5u"/><path class="mingyz5ad"/><path class="e3cjgkfkd"/><path clip-rule="evenodd" class="kspoj7vnd"/></g>`,
		"fallback": "pepicons-pencil:expand-circle-off",
	});
}

export default Component;
