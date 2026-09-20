import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h8hwn3qsq.css';
import '../../css/x/x38ni45vb.css';
import '../../css/s/s7yettc0g.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h8hwn3qsq"/><path class="x38ni45vb"/><path class="s7yettc0g"/>`,
		"fallback": "openmoji:black-star",
	});
}

export default Component;
