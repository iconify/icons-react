import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bz1d02xod.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bz1d02xod"/>`,
		"fallback": "tabler:adjustments-code",
	});
}

export default Component;
