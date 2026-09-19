import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nv9qcacyl.css';
import '../../css/l/lbq_y8bzz.css';
import '../../css/n/n1mjunbsu.css';
import '../../css/e/edsn48boz.css';
import '../../css/g/gzr-zob0i.css';

const viewBox = {"width":640,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nv9qcacyl"><path class="lbq_y8bzz"/><g class="n1mjunbsu"><path class="edsn48boz"/><path class="gzr-zob0i"/></g></g>`,
		"fallback": "flag:ch-4x3",
	});
}

export default Component;
