import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/m/mnalv31ip.css';
import '../../css/u/ulw-1mb-v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="mnalv31ip"/><path class="ulw-1mb-v wm-a"/></g>`,
		"fallback": "withicons:feather",
	});
}

export default Component;
