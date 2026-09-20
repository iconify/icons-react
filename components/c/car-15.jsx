import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hqqep2yzj.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hqqep2yzj"/>`,
		"fallback": "maki:car-15",
	});
}

export default Component;
