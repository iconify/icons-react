import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f64paxb2y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f64paxb2y"/>`,
		"fallback": "prime:angle-right",
	});
}

export default Component;
