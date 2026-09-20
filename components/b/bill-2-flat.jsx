import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yszczrbew.css';
import '../../css/b/b-lxpfbna.css';
import '../../css/y/yfl1x81uv.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yszczrbew"/><path clip-rule="evenodd" class="b-lxpfbna"/><path class="yfl1x81uv"/></g>`,
		"fallback": "streamline-color:bill-2-flat",
	});
}

export default Component;
