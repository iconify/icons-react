import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vbxbaodhg.css';
import '../../css/k/kr384tway.css';
import '../../css/l/laxg67brp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vbxbaodhg"><path class="kr384tway"/><path class="laxg67brp"/></g>`,
		"fallback": "lets-icons:form-duotone-line",
	});
}

export default Component;
