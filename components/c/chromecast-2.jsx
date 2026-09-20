import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gdrh5n46t.css';
import '../../css/l/lip2wgr-f.css';
import '../../css/y/y74vs9bde.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="gdrh5n46t"/><path class="lip2wgr-f"/><path class="y74vs9bde"/></g>`,
		"fallback": "nrk:chromecast-2",
	});
}

export default Component;
