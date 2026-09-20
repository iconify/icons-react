import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k62k3eb6c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k62k3eb6c"/>`,
		"fallback": "reicon:arrow-left4",
	});
}

export default Component;
