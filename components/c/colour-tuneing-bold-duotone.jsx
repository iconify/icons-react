import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mbgvmfb1y.css';
import '../../css/e/eeolu18wj.css';
import '../../css/a/ah6qpw38g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mbgvmfb1y"/><path class="eeolu18wj"/><path class="ah6qpw38g"/>`,
		"fallback": "solar:colour-tuneing-bold-duotone",
	});
}

export default Component;
