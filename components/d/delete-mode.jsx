import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l7g8vpbdo.css';
import '../../css/t/twovfhblf.css';
import '../../css/o/oi613jb8b.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l7g8vpbdo"><path class="twovfhblf"/><path class="oi613jb8b"/></g>`,
		"fallback": "icon-park:delete-mode",
	});
}

export default Component;
