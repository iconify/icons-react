import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sk08j9bet.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sk08j9bet"/>`,
		"fallback": "maki:drinking-water",
	});
}

export default Component;
