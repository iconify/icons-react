import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ol1qgland.css';
import '../../css/l/lu-nqrbmy.css';
import '../../css/t/tmatxnbbk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ol1qgland"><path class="lu-nqrbmy"/><path class="tmatxnbbk"/></g>`,
		"fallback": "icon-park-outline:dark-mode",
	});
}

export default Component;
