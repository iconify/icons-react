import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/s/srmhdmbic.css';
import '../../css/g/gaomxbc9t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="srmhdmbic"/><path class="gaomxbc9t"/></g>`,
		"fallback": "hugeicons:file-locked",
	});
}

export default Component;
