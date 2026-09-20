import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g0p-2pbst.css';
import '../../css/e/efoiiwh-b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g0p-2pbst"/><path class="efoiiwh-b"/>`,
		"fallback": "solar:4k-bold-duotone",
	});
}

export default Component;
