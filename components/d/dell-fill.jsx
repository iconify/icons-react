import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r_s-y0-hq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="r_s-y0-hq"/>`,
		"fallback": "lets-icons:dell-fill",
	});
}

export default Component;
