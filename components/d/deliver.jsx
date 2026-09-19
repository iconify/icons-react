import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lm3a5acjp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lm3a5acjp"/>`,
		"fallback": "grommet-icons:deliver",
	});
}

export default Component;
