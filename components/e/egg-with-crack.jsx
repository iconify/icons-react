import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kd17dsnob.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kd17dsnob"/>`,
		"fallback": "pinhead:egg-with-crack",
	});
}

export default Component;
