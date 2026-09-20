import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mf-x9x4-a.css';
import '../../css/j/j2fntcc6i.css';

const viewBox = {"width":63,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mf-x9x4-a"/><path class="j2fntcc6i"/>`,
		"fallback": "medical-icon:elevators",
	});
}

export default Component;
