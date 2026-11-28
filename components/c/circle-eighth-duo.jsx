import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z83ayhbhi.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/u/ud95brdct.css';
import '../../css/t/tyobncbux.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary z83ayhbhi"/><g class="dt0cm9dhy primary"><path class="ud95brdct"/><path class="tyobncbux"/></g>`,
		"fallback": "iconaut:circle-eighth-duo",
	});
}

export default Component;
