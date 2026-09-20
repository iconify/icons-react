import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/d/d2uni5b8r.css';
import '../../css/a/aw3qdpbef.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><rect class="d2uni5b8r"/><path class="aw3qdpbef"/></g>`,
		"fallback": "lets-icons:desk-light",
	});
}

export default Component;
