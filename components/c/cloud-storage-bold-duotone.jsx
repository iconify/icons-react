import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cd-dy5b1v.css';
import '../../css/m/m3911cl6a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cd-dy5b1v"/><path class="m3911cl6a"/>`,
		"fallback": "solar:cloud-storage-bold-duotone",
	});
}

export default Component;
