import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f0pae0buv.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f0pae0buv"/>`,
		"fallback": "fluent-mdl2:close-pane",
	});
}

export default Component;
