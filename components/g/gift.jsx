import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jw6ktns_g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jw6ktns_g"/>`,
		"fallback": "grommet-icons:gift",
	});
}

export default Component;
