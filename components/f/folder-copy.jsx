import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/a/aeyojhj1q.css';
import '../../css/l/liewl6bve.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><path class="aeyojhj1q"/><path class="liewl6bve"/></g>`,
		"fallback": "lets-icons:folder-copy",
	});
}

export default Component;
