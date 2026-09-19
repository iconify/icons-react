import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uvv42hv0s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b uvv42hv0s"/>`,
		"fallback": "boxicons:bench",
	});
}

export default Component;
