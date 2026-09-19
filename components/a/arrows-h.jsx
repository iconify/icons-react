import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/za9qyur9l.css';

const viewBox = {"width":1792,"height":1280};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="za9qyur9l"/>`,
		"fallback": "fa:arrows-h",
	});
}

export default Component;
