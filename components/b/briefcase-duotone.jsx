import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y-p17xltj.css';
import '../../css/n/n7r-a_bnk.css';
import '../../css/r/rtl6i4bnc.css';
import '../../css/t/t-40-pbkj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="y-p17xltj"/><path class="n7r-a_bnk"/><path class="rtl6i4bnc"/><path class="t-40-pbkj"/></g>`,
		"fallback": "iconamoon:briefcase-duotone",
	});
}

export default Component;
