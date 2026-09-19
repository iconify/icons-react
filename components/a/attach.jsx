import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s2op-6baz.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s2op-6baz"/>`,
		"fallback": "fluent-mdl2:attach",
	});
}

export default Component;
