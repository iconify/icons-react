import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/w/wyfdj045u.css';
import '../../css/f/fbz40u7el.css';
import '../../css/m/mf5o56bqa.css';
import '../../css/t/ttzeghclf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="wm-shadow wyfdj045u"/><path class="fbz40u7el wm-shadow"/><path class="mf5o56bqa"/><path class="ttzeghclf"/></g>`,
		"fallback": "withicons-brutal:cookie",
	});
}

export default Component;
