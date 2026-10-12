import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t--xytb9r.css';
import '../../css/c/clx0kobhk.css';
import '../../css/z/zsa96hgjp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="t--xytb9r"/><rect class="clx0kobhk"/><path class="zsa96hgjp"/></g>`,
		"fallback": "andrsrxn:container",
	});
}

export default Component;
