import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/auz6fkr2m.css';

const viewBox = {"width":24,"height":24,"left":-6.5,"top":-6.5};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="auz6fkr2m"/>`,
		"fallback": "jam:arrow-down-right",
	});
}

export default Component;
