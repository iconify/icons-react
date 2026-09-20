import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rp2h1tbsc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rp2h1tbsc"/>`,
		"fallback": "tdesign:align-vertical",
	});
}

export default Component;
