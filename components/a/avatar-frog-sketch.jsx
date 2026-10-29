import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/w/wu4ujjs1l.css';
import '../../css/f/f9i3isblv.css';
import '../../css/h/hvwm98ued.css';
import '../../css/z/zugs6ubka.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="wu4ujjs1l"/><path class="f9i3isblv wm-a"/><path class="hvwm98ued wm-k"/><path class="wm-a zugs6ubka"/></g>`,
		"fallback": "withicons:avatar-frog-sketch",
	});
}

export default Component;
