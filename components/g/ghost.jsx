import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qsg68bc0n.css';
import '../../css/z/zzea6b0lf.css';
import '../../css/z/z83axnb3z.css';
import '../../css/v/vg28oib3q.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="qsg68bc0n"><path class="zzea6b0lf"/><path class="z83axnb3z"/><path class="vg28oib3q"/></g>`,
		"fallback": "doodle-icons:ghost",
	});
}

export default Component;
