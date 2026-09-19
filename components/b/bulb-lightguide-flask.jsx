import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k8987domc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k8987domc"/>`,
		"fallback": "cbi:bulb-lightguide-flask",
	});
}

export default Component;
