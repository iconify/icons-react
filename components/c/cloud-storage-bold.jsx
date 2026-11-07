import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cd-dy5b1v.css';
import '../../css/z/zxk2nibyi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cd-dy5b1v"/><path class="zxk2nibyi"/>`,
		"fallback": "solar:cloud-storage-bold",
	});
}

export default Component;
