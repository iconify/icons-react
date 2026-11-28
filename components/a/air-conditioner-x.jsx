import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1h5tdb3l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n1h5tdb3l"/>`,
		"fallback": "noviair-light:air-conditioner-x",
	});
}

export default Component;
