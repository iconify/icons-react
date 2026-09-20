import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/f/fflwcby7a.css';
import '../../css/g/giqbfv3yn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="fflwcby7a"/><path class="giqbfv3yn"/></g>`,
		"fallback": "solar:arrow-left-line-duotone",
	});
}

export default Component;
