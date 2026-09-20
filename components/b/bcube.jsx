import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/grfwzfblc.css';
import '../../css/u/uszi3vbgi.css';
import '../../css/j/j3bk5ybiu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="grfwzfblc"/><path class="uszi3vbgi"/><path clip-rule="evenodd" class="j3bk5ybiu"/>`,
		"fallback": "token:bcube",
	});
}

export default Component;
