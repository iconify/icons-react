import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vbxbaodhg.css';
import '../../css/o/ojg8e410h.css';
import '../../css/w/w5-c7ob8f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vbxbaodhg"><path class="ojg8e410h"/><path class="w5-c7ob8f"/></g>`,
		"fallback": "lets-icons:hide-eye-duotone",
	});
}

export default Component;
