import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pgtxoq_7g.css';
import '../../css/s/shlncrbqa.css';
import '../../css/q/qahh7jj6e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="pgtxoq_7g"/><path class="shlncrbqa"/><path class="qahh7jj6e"/></g>`,
		"fallback": "reicon:cloud-snow2-duotone",
	});
}

export default Component;
