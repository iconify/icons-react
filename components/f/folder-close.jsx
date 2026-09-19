import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/j/jexdvubgo.css';
import '../../css/b/b9h-f8bxl.css';
import '../../css/v/vb28crb_k.css';
import '../../css/g/g5e8xw6vn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><path class="jexdvubgo"/><path class="b9h-f8bxl"/><path class="vb28crb_k"/><path class="g5e8xw6vn"/></g>`,
		"fallback": "icon-park:folder-close",
	});
}

export default Component;
