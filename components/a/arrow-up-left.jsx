import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u_5cy0b-s.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u_5cy0b-s"/>`,
		"fallback": "gravity-ui:arrow-up-left",
	});
}

export default Component;
