import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/w/wc-7gebsn.css';
import '../../css/m/mnfeitrok.css';
import '../../css/x/x9m6rhb2c.css';
import '../../css/v/vve7qertz.css';
import '../../css/k/kr4rgs68j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="wc-7gebsn wm-deco"/><path class="mnfeitrok wm-deco"/><path class="wm-k x9m6rhb2c"/><path class="vve7qertz wm-a"/><path class="kr4rgs68j wm-a"/></g>`,
		"fallback": "withicons:case-lower-blueprint",
	});
}

export default Component;
