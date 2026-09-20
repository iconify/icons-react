import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f2jk59bkf.css';
import '../../css/n/nshdljy6n.css';
import '../../css/y/yt38dpl0f.css';
import '../../css/i/i9-xrkbsi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="f2jk59bkf"/><path class="nshdljy6n"/><path class="yt38dpl0f"/><path class="i9-xrkbsi"/></g>`,
		"fallback": "tdesign:building-1",
	});
}

export default Component;
