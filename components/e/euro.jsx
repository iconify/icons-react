import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/d/duyyrjbez.css';
import '../../css/f/f4uooybgd.css';
import '../../css/w/wg-8r2bsi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="duyyrjbez wm-k"/><path class="f4uooybgd wm-a"/><path class="wg-8r2bsi wm-deco"/></g>`,
		"fallback": "withicons-kawaii:euro",
	});
}

export default Component;
