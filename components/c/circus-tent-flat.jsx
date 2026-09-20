import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tez6vb_dy.css';
import '../../css/p/ps1gcdb-x.css';
import '../../css/i/i434cobst.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="tez6vb_dy"/><path class="ps1gcdb-x"/><path clip-rule="evenodd" class="i434cobst"/></g>`,
		"fallback": "streamline-sharp-color:circus-tent-flat",
	});
}

export default Component;
