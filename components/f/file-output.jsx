import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/q/q04h6xbxi.css';
import '../../css/r/r48oglovt.css';
import '../../css/s/sxqrgkbrx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="q04h6xbxi"/><path class="r48oglovt"/><path class="sxqrgkbrx"/></g>`,
		"fallback": "withicons-bauhaus:file-output",
	});
}

export default Component;
