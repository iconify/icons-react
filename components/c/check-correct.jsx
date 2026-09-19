import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/b/b1xcyxb7w.css';
import '../../css/m/m594zc8-q.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="b1xcyxb7w"/><path class="m594zc8-q"/></g>`,
		"fallback": "icon-park-outline:check-correct",
	});
}

export default Component;
