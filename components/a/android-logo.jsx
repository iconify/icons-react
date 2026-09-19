import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s7ylo-2js.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s7ylo-2js"/>`,
		"fallback": "fluent-mdl2:android-logo",
	});
}

export default Component;
