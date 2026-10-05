import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/v/v8n63r32y.css';
import '../../css/z/zb6ugnr2e.css';
import '../../css/e/ey9qgmrtf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="v8n63r32y"/><path class="zb6ugnr2e"/><path class="ey9qgmrtf"/></g>`,
		"fallback": "matita:git-commit",
	});
}

export default Component;
