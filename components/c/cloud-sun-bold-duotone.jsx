import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qb7vvlbro.css';
import '../../css/y/y7ajkhrwp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="qb7vvlbro"/><path class="y7ajkhrwp"/>`,
		"fallback": "solar:cloud-sun-bold-duotone",
	});
}

export default Component;
