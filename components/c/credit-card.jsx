import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/krzg23dcj.css';

const viewBox = {"width":36,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="krzg23dcj"/>`,
		"fallback": "fontisto:credit-card",
	});
}

export default Component;
