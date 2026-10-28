import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/ac-a9hbrx.css';
import '../../css/u/u5h8llb9a.css';
import '../../css/n/nnkifs7vx.css';
import '../../css/f/fhm0o20ic.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ac-a9hbrx"/><path class="u5h8llb9a"/><path class="nnkifs7vx"/><path class="fhm0o20ic"/></g>`,
		"fallback": "andrsrxn:globe-map-pin",
	});
}

export default Component;
