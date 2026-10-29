import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/i/i8fluyi0w.css';
import '../../css/q/q4f-8cbto.css';
import '../../css/y/y-xkudbrq.css';
import '../../css/a/adnxrhb5g.css';
import '../../css/p/p43mkbb9d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="i8fluyi0w"/><path class="q4f-8cbto wm-a"/><path class="wm-a y-xkudbrq"/><path class="adnxrhb5g"/><path class="p43mkbb9d wm-a"/></g>`,
		"fallback": "withicons:bandage-duo",
	});
}

export default Component;
