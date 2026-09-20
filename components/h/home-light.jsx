import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/y/y--4l3cfh.css';
import '../../css/s/smffg765a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="y--4l3cfh"/><path class="smffg765a"/></g>`,
		"fallback": "lets-icons:home-light",
	});
}

export default Component;
