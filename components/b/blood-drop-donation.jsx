import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/js0b88duz.css';
import '../../css/t/ttq-c_wut.css';
import '../../css/z/zts9p0bez.css';
import '../../css/v/vhvxwvg7f.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="js0b88duz"/><path class="ttq-c_wut"/><path class="zts9p0bez"/><path class="vhvxwvg7f"/></g>`,
		"fallback": "streamline-color:blood-drop-donation",
	});
}

export default Component;
