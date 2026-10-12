import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i-_r7fzby.css';
import '../../css/u/uo3w-_qqw.css';
import '../../css/a/a68jy1ppt.css';
import '../../css/v/vm305za0x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="i-_r7fzby"/><path class="uo3w-_qqw"/><path class="a68jy1ppt"/><path class="vm305za0x"/></g>`,
		"fallback": "andrsrxn:folder-cube",
	});
}

export default Component;
