import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/x/x40noxwfi.css';
import '../../css/c/cokb7abfu.css';
import '../../css/y/yh5hycbni.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="x40noxwfi"/><path class="cokb7abfu"/><path class="yh5hycbni"/></g>`,
		"fallback": "withicons-bauhaus:avatar-bear",
	});
}

export default Component;
