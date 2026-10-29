import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/x/xr4m5hjea.css';
import '../../css/b/b7gjsf92m.css';
import '../../css/h/hsmjbytjh.css';
import '../../css/z/zz6g7nb8u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="wm-k xr4m5hjea"/><path class="b7gjsf92m wm-s"/><path class="hsmjbytjh"/><path class="wm-s zz6g7nb8u"/></g>`,
		"fallback": "withicons-bauhaus:file-clock",
	});
}

export default Component;
