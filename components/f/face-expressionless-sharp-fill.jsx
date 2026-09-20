import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g2--ctuld.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g2--ctuld"/>`,
		"fallback": "keyline-icons:face-expressionless-sharp-fill",
	});
}

export default Component;
