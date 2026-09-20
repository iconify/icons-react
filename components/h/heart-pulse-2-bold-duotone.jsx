import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/or5brzb6i.css';
import '../../css/q/qw06m4d0o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="or5brzb6i"/><path class="qw06m4d0o"/></g>`,
		"fallback": "solar:heart-pulse-2-bold-duotone",
	});
}

export default Component;
