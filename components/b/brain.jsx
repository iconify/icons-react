import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rp9bf8b6a.css';

const viewBox = {"width":1024,"height":960};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rp9bf8b6a"/>`,
		"fallback": "whh:brain",
	});
}

export default Component;
