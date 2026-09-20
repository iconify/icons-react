import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/e/execxjbqc.css';
import '../../css/s/skibzib0k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="execxjbqc"/><path class="skibzib0k"/></g>`,
		"fallback": "reicon:directbox-notif",
	});
}

export default Component;
