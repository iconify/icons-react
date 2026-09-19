import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kzt1csb1a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kzt1csb1a"/>`,
		"fallback": "grommet-icons:columns",
	});
}

export default Component;
