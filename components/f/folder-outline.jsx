import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hrtamebsr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="folder-outline"><path class="(Stroke) Vector hrtamebsr" clip-rule="evenodd"/></g>`,
		"fallback": "cuida:folder-outline",
	});
}

export default Component;
