import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nc51-mbtm.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nc51-mbtm"/>`,
		"fallback": "whh:gamecursor",
	});
}

export default Component;
