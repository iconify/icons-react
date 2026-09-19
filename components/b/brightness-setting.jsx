import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ogxsybcnp.css';

const viewBox = {"width":472,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ogxsybcnp"/>`,
		"fallback": "zmdi:brightness-setting",
	});
}

export default Component;
