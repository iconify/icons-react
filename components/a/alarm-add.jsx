import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tjbwptb_r.css';
import '../../css/i/i7c_uqjwd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="tjbwptb_r"/><path class="i7c_uqjwd"/></g>`,
		"fallback": "tdesign:alarm-add",
	});
}

export default Component;
