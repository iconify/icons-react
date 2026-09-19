import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hi_3yte4a.css';
import '../../css/y/y9dlnubeo.css';
import '../../css/a/ag75s1cpg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="hi_3yte4a"/><path class="y9dlnubeo"/><path class="ag75s1cpg"/></g>`,
		"fallback": "healthicons:dairy",
	});
}

export default Component;
