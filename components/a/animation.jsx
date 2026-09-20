import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gn70etb5j.css';
import '../../css/l/lshlw4lwo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="gn70etb5j"/><path class="lshlw4lwo"/></g>`,
		"fallback": "tdesign:animation",
	});
}

export default Component;
