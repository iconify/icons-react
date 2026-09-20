import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pr52f_b5y.css';
import '../../css/v/v9myf9bmx.css';
import '../../css/p/pdzzspcnx.css';
import '../../css/p/p26y3yb2w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="pr52f_b5y"><path class="v9myf9bmx"/><circle class="pdzzspcnx"/><path class="p26y3yb2w"/></g>`,
		"fallback": "lets-icons:file-dock-search-light",
	});
}

export default Component;
