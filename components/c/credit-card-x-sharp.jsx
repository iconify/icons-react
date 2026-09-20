import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ohujd2_nj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ohujd2_nj"/>`,
		"fallback": "keyline-icons:credit-card-x-sharp",
	});
}

export default Component;
