import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pa7v1s--s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pa7v1s--s"/>`,
		"fallback": "keyline-icons:face-expressionless-sharp",
	});
}

export default Component;
