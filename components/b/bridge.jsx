import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/g/gl7r5mbef.css';
import '../../css/v/vkheg01za.css';
import '../../css/y/y9x9hjb6x.css';
import '../../css/v/velqwqzck.css';
import '../../css/r/rpkv4hbxb.css';
import '../../css/v/vuqqfv8ij.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="gl7r5mbef"/><path class="vkheg01za"/><path class="y9x9hjb6x"/><path class="velqwqzck"/><path class="rpkv4hbxb"/><path class="vuqqfv8ij"/></g>`,
		"fallback": "iconaut:bridge",
	});
}

export default Component;
