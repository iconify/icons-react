import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i_vii1mtq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i_vii1mtq"/>`,
		"fallback": "bxs:heart-circle",
	});
}

export default Component;
