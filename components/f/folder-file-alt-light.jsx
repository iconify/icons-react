import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/x/xrfgp0bpp.css';
import '../../css/v/vc02c23rw.css';
import '../../css/x/xtch0nbcn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="xrfgp0bpp"/><path class="vc02c23rw"/><path class="xtch0nbcn"/></g>`,
		"fallback": "lets-icons:folder-file-alt-light",
	});
}

export default Component;
