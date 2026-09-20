import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dkbcjib7e.css';
import '../../css/b/b3yno-tjj.css';
import '../../css/p/pijqxibra.css';
import '../../css/q/qd1s2zbbb.css';
import '../../css/g/gdo86yb9k.css';
import '../../css/k/kspoj7vnd.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="dkbcjib7e"/><path class="b3yno-tjj"/><path class="pijqxibra"/><path class="qd1s2zbbb"/><path class="gdo86yb9k"/><path clip-rule="evenodd" class="kspoj7vnd"/></g>`,
		"fallback": "pepicons-pencil:arrows-spin-circle-off",
	});
}

export default Component;
