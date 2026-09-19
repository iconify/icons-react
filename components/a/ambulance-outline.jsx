import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u1yv_zb7o.css';
import '../../css/j/juwkrcciy.css';
import '../../css/a/a2_salbpt.css';
import '../../css/r/r2nxirafe.css';
import '../../css/n/ntd5mxbgb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="u1yv_zb7o"/><path clip-rule="evenodd" class="juwkrcciy"/><path clip-rule="evenodd" class="a2_salbpt"/><path clip-rule="evenodd" class="r2nxirafe"/><path clip-rule="evenodd" class="ntd5mxbgb"/>`,
		"fallback": "cuida:ambulance-outline",
	});
}

export default Component;
