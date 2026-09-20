import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lsv3emysi.css';
import '../../css/l/lrloqybnl.css';
import '../../css/w/wcftsnbie.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lsv3emysi"/><path class="lrloqybnl"/><path class="wcftsnbie"/></g>`,
		"fallback": "streamline-cyber-color:glass-1",
	});
}

export default Component;
