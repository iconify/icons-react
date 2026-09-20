import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p07tmccvv.css';
import '../../css/h/hflcmzrer.css';
import '../../css/z/zcdwyyb5f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="p07tmccvv"><path class="hflcmzrer"/><path class="zcdwyyb5f"/></g>`,
		"fallback": "tdesign:cloud-upload",
	});
}

export default Component;
