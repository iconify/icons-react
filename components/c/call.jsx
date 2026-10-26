import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/acydh6b-k.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="acydh6b-k"/>`,
		"fallback": "doodle-icons:call",
	});
}

export default Component;
