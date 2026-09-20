import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ugxz7ebzv.css';
import '../../css/z/zc56dz_yh.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ugxz7ebzv"/><path clip-rule="evenodd" class="zc56dz_yh"/></g>`,
		"fallback": "streamline-flex-color:ball-flat",
	});
}

export default Component;
