import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l7g8vpbdo.css';
import '../../css/t/twovfhblf.css';
import '../../css/m/mu8tysbrz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l7g8vpbdo"><path class="twovfhblf"/><path class="mu8tysbrz"/></g>`,
		"fallback": "icon-park:dark-mode",
	});
}

export default Component;
