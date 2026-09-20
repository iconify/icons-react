import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aw9lf_b3c.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="aw9lf_b3c"/>`,
		"fallback": "streamline:arrow-reload-vertical-2-solid",
	});
}

export default Component;
