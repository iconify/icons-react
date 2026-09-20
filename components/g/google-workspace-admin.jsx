import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qb38kubsp.css';
import '../../css/o/orh3vwvtn.css';
import '../../css/y/ybpt-acew.css';
import '../../css/m/m-sco7b6z.css';

const viewBox = {"width":192,"height":192};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qb38kubsp"/><path class="orh3vwvtn"/><path class="ybpt-acew"/><path class="m-sco7b6z"/>`,
		"fallback": "thesvg-color:google-workspace-admin",
	});
}

export default Component;
