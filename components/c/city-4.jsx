import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yjdhy627t.css';
import '../../css/z/z2gub5sms.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yjdhy627t"/><path class="z2gub5sms"/></g>`,
		"fallback": "tdesign:city-4",
	});
}

export default Component;
