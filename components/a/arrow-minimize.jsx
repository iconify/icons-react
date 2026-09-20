import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lee3l3bbo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lee3l3bbo"/>`,
		"fallback": "proicons:arrow-minimize",
	});
}

export default Component;
