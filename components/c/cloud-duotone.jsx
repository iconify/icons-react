import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yw-sahgjj.css';
import '../../css/h/htakomb3o.css';
import '../../css/q/qv1sowbkw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="yw-sahgjj"/><path class="htakomb3o"/><path class="qv1sowbkw"/></g>`,
		"fallback": "lets-icons:cloud-duotone",
	});
}

export default Component;
