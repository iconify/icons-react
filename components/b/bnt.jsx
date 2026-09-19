import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yhx7tbbux.css';
import '../../css/g/gbsbwz_di.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="yhx7tbbux"/><path class="gbsbwz_di"/></g>`,
		"fallback": "cryptocurrency-color:bnt",
	});
}

export default Component;
