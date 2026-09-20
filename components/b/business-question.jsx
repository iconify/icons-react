import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xh2gcibwj.css';
import '../../css/a/arth0nbvw.css';
import '../../css/p/pn80nsbvq.css';
import '../../css/w/wz6-a6xcs.css';
import '../../css/g/gir47ccbc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xh2gcibwj"/><path class="arth0nbvw"/><path class="pn80nsbvq"/><path class="wz6-a6xcs"/><path class="gir47ccbc"/></g>`,
		"fallback": "streamline-cyber-color:business-question",
	});
}

export default Component;
