import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qm1-5mbwi.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qm1-5mbwi"/>`,
		"fallback": "fluent-mdl2:cloud-weather",
	});
}

export default Component;
