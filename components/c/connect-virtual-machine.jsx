import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/goeb-kbjg.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="goeb-kbjg"/>`,
		"fallback": "fluent-mdl2:connect-virtual-machine",
	});
}

export default Component;
