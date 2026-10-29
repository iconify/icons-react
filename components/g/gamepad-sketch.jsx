import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/j/jj08d2qml.css';
import '../../css/j/jew-xxopj.css';
import '../../css/v/vimmpcbiq.css';
import '../../css/u/uiy43vn5w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="jj08d2qml"/><path class="jew-xxopj wm-a"/><path class="vimmpcbiq wm-k"/><path class="uiy43vn5w wm-a"/></g>`,
		"fallback": "withicons:gamepad-sketch",
	});
}

export default Component;
