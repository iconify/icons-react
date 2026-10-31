import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/e/estdgvbtb.css';
import '../../css/m/ml2lq6y_v.css';
import '../../css/l/lg-8n1num.css';
import '../../css/o/oijoyrt4u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="estdgvbtb"/><path class="ml2lq6y_v wm-shine"/><path class="lg-8n1num wm-k"/><path class="oijoyrt4u wm-a"/></g>`,
		"fallback": "withicons-kawaii:columns-3",
	});
}

export default Component;
