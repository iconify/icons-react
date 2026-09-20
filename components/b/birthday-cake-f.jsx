import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rgp1bebal.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-1};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rgp1bebal"/>`,
		"fallback": "jam:birthday-cake-f",
	});
}

export default Component;
