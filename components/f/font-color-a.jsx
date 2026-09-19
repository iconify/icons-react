import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/luw00uyws.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="luw00uyws"/>`,
		"fallback": "fluent-mdl2:font-color-a",
	});
}

export default Component;
