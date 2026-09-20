import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l6kox_6dt.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l6kox_6dt"/>`,
		"fallback": "streamline:arrow-up-1",
	});
}

export default Component;
