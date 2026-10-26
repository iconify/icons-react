import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qsg68bc0n.css';
import '../../css/s/sdc6ipbtp.css';
import '../../css/y/ykol-_blb.css';
import '../../css/r/r2lhtab-a.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="qsg68bc0n"><path class="sdc6ipbtp"/><path class="ykol-_blb"/><path class="r2lhtab-a"/></g>`,
		"fallback": "doodle-icons:cube",
	});
}

export default Component;
