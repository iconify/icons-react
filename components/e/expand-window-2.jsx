import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fjad2w0vk.css';
import '../../css/c/cu1pu_ahr.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fjad2w0vk"/><path class="cu1pu_ahr"/></g>`,
		"fallback": "streamline-color:expand-window-2",
	});
}

export default Component;
