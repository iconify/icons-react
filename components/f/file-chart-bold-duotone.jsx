import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oj6gwrmjs.css';
import '../../css/a/a6rl69b5y.css';
import '../../css/b/br9a0t2td.css';
import '../../css/u/uy28rnb-n.css';
import '../../css/x/x4f46-b2l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="oj6gwrmjs"/><path class="a6rl69b5y"/><path class="br9a0t2td"/><path class="uy28rnb-n"/><path class="x4f46-b2l"/>`,
		"fallback": "solar:file-chart-bold-duotone",
	});
}

export default Component;
