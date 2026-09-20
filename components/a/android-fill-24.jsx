import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hr1fkbc1e.css';
import '../../css/b/b1cbzpwmm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hr1fkbc1e"/><path class="b1cbzpwmm"/>`,
		"fallback": "qlementine-icons:android-fill-24",
	});
}

export default Component;
