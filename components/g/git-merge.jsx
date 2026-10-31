import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/q/qnx4t3y-j.css';
import '../../css/x/x-pqqv81t.css';
import '../../css/v/va8921bzg.css';
import '../../css/w/wb3c7x6fa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="qnx4t3y-j"/><path class="wm-shine x-pqqv81t"/><path class="va8921bzg"/><path class="wb3c7x6fa wm-deco"/></g>`,
		"fallback": "withicons-kawaii:git-merge",
	});
}

export default Component;
