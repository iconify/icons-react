import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/borwc3j6i.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="borwc3j6i"/>`,
		"fallback": "fluent-mdl2:file-sass",
	});
}

export default Component;
