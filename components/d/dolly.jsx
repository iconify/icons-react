import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ushy56l0f.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ushy56l0f"/>`,
		"fallback": "fa6-solid:dolly",
	});
}

export default Component;
