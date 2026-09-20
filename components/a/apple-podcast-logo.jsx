import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/q/qtlkgac4v.css';
import '../../css/o/o02ofuo8o.css';
import '../../css/e/eel50ebch.css';
import '../../css/s/swaykybso.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="qtlkgac4v"/><path class="o02ofuo8o"/><path class="eel50ebch"/><path class="swaykybso"/></g>`,
		"fallback": "streamline-logos:apple-podcast-logo",
	});
}

export default Component;
