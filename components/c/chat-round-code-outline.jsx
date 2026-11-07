import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lal7_isyr.css';
import '../../css/m/mjkr6tb4a.css';
import '../../css/w/wcny-ibdw.css';
import '../../css/x/x9024bb4v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lal7_isyr"/><path class="mjkr6tb4a"/><path class="wcny-ibdw"/><path clip-rule="evenodd" class="x9024bb4v"/>`,
		"fallback": "solar:chat-round-code-outline",
	});
}

export default Component;
