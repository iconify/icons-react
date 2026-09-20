import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hjzzbm_-c.css';
import '../../css/x/xmx9zi21u.css';
import '../../css/l/l8z7n1gta.css';
import '../../css/b/b-h0r-bhn.css';
import '../../css/q/q505187yx.css';
import '../../css/k/kspoj7vnd.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hjzzbm_-c"/><path clip-rule="evenodd" class="xmx9zi21u"/><path class="l8z7n1gta"/><path clip-rule="evenodd" class="b-h0r-bhn"/><path clip-rule="evenodd" class="q505187yx"/><path clip-rule="evenodd" class="kspoj7vnd"/></g>`,
		"fallback": "pepicons-print:flower-circle-filled",
	});
}

export default Component;
