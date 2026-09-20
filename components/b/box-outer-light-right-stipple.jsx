import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v_nts0kjv.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v_nts0kjv"/>`,
		"fallback": "memory:box-outer-light-right-stipple",
	});
}

export default Component;
