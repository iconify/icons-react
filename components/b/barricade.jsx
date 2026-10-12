import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jo6-r4bwr.css';
import '../../css/w/wgrk3yble.css';
import '../../css/g/gurklgb6l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jo6-r4bwr"/><rect class="wgrk3yble"/><path class="gurklgb6l"/></g>`,
		"fallback": "andrsrxn:barricade",
	});
}

export default Component;
