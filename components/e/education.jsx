import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ruajt4b7o.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ruajt4b7o"/>`,
		"fallback": "fluent-mdl2:education",
	});
}

export default Component;
