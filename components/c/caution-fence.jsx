import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yt3hqnohm.css';
import '../../css/j/j85dr9jmk.css';
import '../../css/n/n6_nr2y0b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yt3hqnohm"/><path class="j85dr9jmk"/><path class="n6_nr2y0b"/></g>`,
		"fallback": "streamline-cyber-color:caution-fence",
	});
}

export default Component;
