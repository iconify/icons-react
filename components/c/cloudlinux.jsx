import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uw_e8kbvq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uw_e8kbvq"/>`,
		"fallback": "grommet-icons:cloudlinux",
	});
}

export default Component;
