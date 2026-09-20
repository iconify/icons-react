import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/awzz3-b6o.css';
import '../../css/u/u9qilne9i.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="awzz3-b6o"/><path class="u9qilne9i"/></g>`,
		"fallback": "streamline-color:add-bell-notification",
	});
}

export default Component;
