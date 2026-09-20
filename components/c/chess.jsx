import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hsyg-3lal.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hsyg-3lal"/>`,
		"fallback": "tabler:chess",
	});
}

export default Component;
