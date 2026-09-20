import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uu_ca8b3i.css';
import '../../css/r/r-h8u5bob.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uu_ca8b3i"/><path class="r-h8u5bob"/>`,
		"fallback": "streamline-ultimate:instagram-logo-bold",
	});
}

export default Component;
