import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/a/ayejp5iod.css';
import '../../css/e/ecuga9b_u.css';
import '../../css/x/xixtq5bii.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="ayejp5iod"/><path class="ecuga9b_u"/><path class="xixtq5bii"/></g>`,
		"fallback": "iconoir:3d-select-face",
	});
}

export default Component;
