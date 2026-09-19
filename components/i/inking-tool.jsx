import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w0jr6ob-f.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w0jr6ob-f"/>`,
		"fallback": "fluent-mdl2:inking-tool",
	});
}

export default Component;
