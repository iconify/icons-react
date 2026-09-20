import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/leb8g0bak.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-2};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="leb8g0bak"/>`,
		"fallback": "jam:fast-backward-circle-f",
	});
}

export default Component;
