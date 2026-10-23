import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vp79sti0y.css';
import '../../css/v/vh251jb8i.css';
import '../../css/s/s4fnlfbmt.css';
import '../../css/p/pu7n3jb0y.css';
import '../../css/j/jzxerubgn.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vp79sti0y"><path clip-rule="evenodd" class="vh251jb8i"/><path clip-rule="evenodd" class="s4fnlfbmt"/><path class="pu7n3jb0y"/><path class="jzxerubgn"/></g>`,
		"fallback": "thesvg-color:bitkit",
	});
}

export default Component;
