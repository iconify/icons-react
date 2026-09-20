import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zzjb0rqzb.css';
import '../../css/m/m99ygkb_k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zzjb0rqzb"/><path class="m99ygkb_k"/>`,
		"fallback": "tdesign:banana-filled",
	});
}

export default Component;
