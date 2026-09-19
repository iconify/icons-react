import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lrqsnub8p.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lrqsnub8p"/>`,
		"fallback": "fluent-mdl2:file-c-s-s",
	});
}

export default Component;
