import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/icc3yibbv.css';
import '../../css/w/wjxfq7fak.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="icc3yibbv"/><path class="wjxfq7fak"/></g>`,
		"fallback": "streamline-ultimate-color:arrange-letter",
	});
}

export default Component;
