import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o9vvgn11d.css';
import '../../css/t/t52mucocr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o9vvgn11d"/><path class="t52mucocr"/>`,
		"fallback": "solar:circle-dashed-bold-duotone",
	});
}

export default Component;
