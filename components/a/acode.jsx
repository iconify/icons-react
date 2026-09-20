import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lq32u3btc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lq32u3btc"/>`,
		"fallback": "thesvg-color:acode",
	});
}

export default Component;
