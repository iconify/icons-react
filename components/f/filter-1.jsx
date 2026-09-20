import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xwhfo1osp.css';
import '../../css/n/ndxwzp4ad.css';
import '../../css/u/uiao42kiv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xwhfo1osp"/><path class="ndxwzp4ad"/><path class="uiao42kiv"/></g>`,
		"fallback": "streamline-ultimate-color:filter-1",
	});
}

export default Component;
