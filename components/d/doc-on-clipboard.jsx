import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d5m9fgbnm.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d5m9fgbnm"/>`,
		"fallback": "f7:doc-on-clipboard",
	});
}

export default Component;
