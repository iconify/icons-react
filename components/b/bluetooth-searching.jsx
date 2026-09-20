import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wnkxsrsgq.css';
import '../../css/c/cn0spvbsb.css';
import '../../css/u/udlqy91nc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wnkxsrsgq"/><path class="cn0spvbsb"/><path class="udlqy91nc"/></g>`,
		"fallback": "streamline-cyber-color:bluetooth-searching",
	});
}

export default Component;
