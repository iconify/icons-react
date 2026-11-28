import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o45hv10in.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o45hv10in"/>`,
		"fallback": "noviair-light:circle-5",
	});
}

export default Component;
