import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r4k4l6b7c.css';
import '../../css/a/aa6fczbzd.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r4k4l6b7c"/><path class="aa6fczbzd"/>`,
		"fallback": "streamline-block:basic-ui-link",
	});
}

export default Component;
