import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ct5n7lppx.css';
import '../../css/t/tcjfwpbur.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/m/mmptx5xgp.css';
import '../../css/r/r2btzyb3k.css';
import '../../css/c/cfzoe278o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ct5n7lppx"/><path class="tcjfwpbur"/><g class="xtpeb-edw"><path class="mmptx5xgp"/><path class="r2btzyb3k"/><path class="cfzoe278o"/></g>`,
		"fallback": "solar:align-vertical-center-bold-duotone",
	});
}

export default Component;
