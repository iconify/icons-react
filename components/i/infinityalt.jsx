import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mkr9aqb5z.css';

const viewBox = {"width":1024,"height":632};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mkr9aqb5z"/>`,
		"fallback": "whh:infinityalt",
	});
}

export default Component;
