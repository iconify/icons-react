import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/k/kmu65o9xz.css';
import '../../css/h/hhy27hzak.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="kmu65o9xz"/><path class="hhy27hzak"/></g>`,
		"fallback": "lets-icons:folder-check-light",
	});
}

export default Component;
