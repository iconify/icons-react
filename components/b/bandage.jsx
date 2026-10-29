import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yel49zbvu.css';
import '../../css/n/nej-5niny.css';
import '../../css/u/u_9h33bqz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wm-a yel49zbvu"/><path class="nej-5niny wm-a"/><path class="u_9h33bqz wm-a"/>`,
		"fallback": "withicons-bauhaus:bandage",
	});
}

export default Component;
