import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yk--5cd_z.css';
import '../../css/m/mg9j7_ddd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yk--5cd_z"/><path class="mg9j7_ddd"/></g>`,
		"fallback": "lets-icons:direction-duotone",
	});
}

export default Component;
