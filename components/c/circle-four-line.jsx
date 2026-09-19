import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d8ceafbgx.css';
import '../../css/z/znsgree8n.css';
import '../../css/b/b9ygpjbkm.css';
import '../../css/y/y00xw2byu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="d8ceafbgx"/><path class="znsgree8n"/><path clip-rule="evenodd" class="b9ygpjbkm"/><path class="y00xw2byu"/></g>`,
		"fallback": "icon-park-solid:circle-four-line",
	});
}

export default Component;
