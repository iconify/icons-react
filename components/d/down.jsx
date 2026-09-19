import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wsuq8tbuj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wsuq8tbuj"/>`,
		"fallback": "icon-park:down",
	});
}

export default Component;
