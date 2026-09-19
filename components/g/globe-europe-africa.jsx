import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pehby3vco.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pehby3vco"/>`,
		"fallback": "heroicons:globe-europe-africa",
	});
}

export default Component;
