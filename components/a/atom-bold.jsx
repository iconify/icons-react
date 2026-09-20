import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/ojnr-0b-g.css';
import '../../css/n/n59emjuce.css';
import '../../css/k/k13u1g96c.css';
import '../../css/t/tzfg6uv5i.css';
import '../../css/k/kzh33ft0l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ojnr-0b-g"/><path clip-rule="evenodd" class="n59emjuce"/><path class="k13u1g96c"/><path class="tzfg6uv5i"/><path class="kzh33ft0l"/></g>`,
		"fallback": "solar:atom-bold",
	});
}

export default Component;
