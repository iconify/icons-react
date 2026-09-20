import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jhnfvmbqa.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jhnfvmbqa"/>`,
		"fallback": "maki:doctor-15",
	});
}

export default Component;
