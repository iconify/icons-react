import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bmynvddub.css';
import '../../css/z/z8qw-75lv.css';
import '../../css/y/y-7m5slpk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bmynvddub"/><path class="z8qw-75lv"/><path class="y-7m5slpk"/></g>`,
		"fallback": "tdesign:calendar-1",
	});
}

export default Component;
