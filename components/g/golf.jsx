import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/u/uoao2igld.css';
import '../../css/m/mr00v4b3c.css';
import '../../css/z/zbn6ce_hz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="uoao2igld wm-k"/><path class="mr00v4b3c wm-a"/><path class="zbn6ce_hz"/></g>`,
		"fallback": "withicons-bauhaus:golf",
	});
}

export default Component;
