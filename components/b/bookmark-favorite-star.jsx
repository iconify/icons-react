import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/euj41jbgy.css';
import '../../css/k/khf5-cb1g.css';
import '../../css/w/wvfe3qshx.css';
import '../../css/r/r1hmr-bmo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="euj41jbgy"/><path class="khf5-cb1g"/><path class="wvfe3qshx"/><path class="r1hmr-bmo"/></g>`,
		"fallback": "streamline-cyber-color:bookmark-favorite-star",
	});
}

export default Component;
