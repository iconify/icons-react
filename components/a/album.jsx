import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kbdh4cbxg.css';
import '../../css/v/vddkgybxd.css';
import '../../css/w/wsi01e1uv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="kbdh4cbxg"/><path class="vddkgybxd"/><path class="wsi01e1uv"/></g>`,
		"fallback": "andrsrxn:album",
	});
}

export default Component;
