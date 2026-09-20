import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kd9y8ubqx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kd9y8ubqx"/>`,
		"fallback": "reicon:close-circle",
	});
}

export default Component;
