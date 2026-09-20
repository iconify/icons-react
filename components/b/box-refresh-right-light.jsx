import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/m/m9zgg3b-r.css';
import '../../css/v/v9zzwjb2k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="m9zgg3b-r"/><path class="v9zzwjb2k"/></g>`,
		"fallback": "lets-icons:box-refresh-right-light",
	});
}

export default Component;
