import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l7g8vpbdo.css';
import '../../css/t/twovfhblf.css';
import '../../css/e/eu68el57b.css';
import '../../css/c/chlmymvhd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l7g8vpbdo"><path class="twovfhblf"/><path class="eu68el57b"/><path class="chlmymvhd"/></g>`,
		"fallback": "icon-park:add-mode",
	});
}

export default Component;
