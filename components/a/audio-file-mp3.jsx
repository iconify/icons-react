import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yf99hf6iy.css';
import '../../css/h/hwzyhq-sg.css';
import '../../css/e/ecv4jac-s.css';
import '../../css/g/gawi2ee5v.css';
import '../../css/u/uet1wnb9m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yf99hf6iy"/><path class="hwzyhq-sg"/><path class="ecv4jac-s"/><path class="gawi2ee5v"/><path class="uet1wnb9m"/></g>`,
		"fallback": "streamline-ultimate-color:audio-file-mp3",
	});
}

export default Component;
