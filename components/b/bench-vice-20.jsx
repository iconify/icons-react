import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t-sroiact.css';
import '../../css/a/a3h9c1bxc.css';
import '../../css/y/y-j487bxe.css';
import '../../css/a/amp2bxb4g.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t-sroiact"/><path class="a3h9c1bxc"/><path class="y-j487bxe"/><path class="amp2bxb4g"/>`,
		"fallback": "energy-icons:bench-vice-20",
	});
}

export default Component;
