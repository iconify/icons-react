import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z6tjmo3jk.css';
import '../../css/y/y1v54k0xv.css';
import '../../css/e/e1ag5zbac.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="z6tjmo3jk"><path class="y1v54k0xv"/><path class="e1ag5zbac"/></g>`,
		"fallback": "streamline-cyber:business-scale-4",
	});
}

export default Component;
