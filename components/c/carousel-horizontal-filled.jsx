import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v32kf_bzj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v32kf_bzj"/>`,
		"fallback": "tabler:carousel-horizontal-filled",
	});
}

export default Component;
