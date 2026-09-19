import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jab5w2bco.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jab5w2bco"/>`,
		"fallback": "eos-icons:application-instance",
	});
}

export default Component;
