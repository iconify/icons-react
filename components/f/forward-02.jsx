import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/j/jhbxicmat.css';
import '../../css/a/agnjmobvy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="jhbxicmat"/><path class="agnjmobvy"/></g>`,
		"fallback": "hugeicons:forward-02",
	});
}

export default Component;
