import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iskbth2oq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iskbth2oq"/>`,
		"fallback": "grommet-icons:database",
	});
}

export default Component;
