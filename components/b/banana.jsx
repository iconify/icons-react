import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/i/is8p2nbel.css';
import '../../css/r/r35bzkbxd.css';
import '../../css/w/wl97hswxc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="is8p2nbel"/><path class="r35bzkbxd"/><path class="wl97hswxc"/></g>`,
		"fallback": "withicons-bauhaus:banana",
	});
}

export default Component;
