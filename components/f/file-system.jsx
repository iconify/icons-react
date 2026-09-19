import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/be24w8bhg.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="be24w8bhg"/>`,
		"fallback": "fluent-mdl2:file-system",
	});
}

export default Component;
