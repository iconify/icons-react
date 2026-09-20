import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dlrq9nb_a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dlrq9nb_a"/>`,
		"fallback": "thesvg:adblock",
	});
}

export default Component;
