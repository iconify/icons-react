import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kk09y49yr.css';
import '../../css/y/yvlpmubcp.css';
import '../../css/b/bw4bmeb4v.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kk09y49yr"/><path clip-rule="evenodd" class="yvlpmubcp"/><path class="bw4bmeb4v"/>`,
		"fallback": "qlementine-icons:gamepad-joystick-right-16",
	});
}

export default Component;
