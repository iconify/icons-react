import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/h/hxpb80bjk.css';
import '../../css/x/xjj57vife.css';
import '../../css/f/fhns2vbpc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="hxpb80bjk"/><path class="xjj57vife"/><path class="fhns2vbpc"/></g>`,
		"fallback": "withicons-bauhaus:black-cat",
	});
}

export default Component;
