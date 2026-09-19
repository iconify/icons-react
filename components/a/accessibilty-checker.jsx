import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvj0jmhv.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wwvj0jmhv"/>`,
		"fallback": "fluent-mdl2:accessibilty-checker",
	});
}

export default Component;
