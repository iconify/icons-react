import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m2vzr5v5s.css';

const viewBox = {"width":24,"height":24,"left":-4.5,"top":-5};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m2vzr5v5s"/>`,
		"fallback": "jam:chevrons-left",
	});
}

export default Component;
