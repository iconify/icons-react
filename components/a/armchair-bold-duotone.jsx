import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yvude-bvd.css';
import '../../css/r/rgo0fe4hn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yvude-bvd"/><path class="rgo0fe4hn"/>`,
		"fallback": "solar:armchair-bold-duotone",
	});
}

export default Component;
