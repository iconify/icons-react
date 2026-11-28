import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aev2ndtkn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aev2ndtkn"/>`,
		"fallback": "noviair-light:cloud-upload-x",
	});
}

export default Component;
