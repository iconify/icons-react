import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f4da20b0w.css';
import '../../css/u/uv7f7ubsb.css';
import '../../css/m/mdojc9bsc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="f4da20b0w"/><path class="uv7f7ubsb"/><path class="mdojc9bsc"/></g>`,
		"fallback": "andrsrxn:file-out",
	});
}

export default Component;
