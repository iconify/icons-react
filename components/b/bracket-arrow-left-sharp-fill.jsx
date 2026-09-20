import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r1mhh7bie.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r1mhh7bie"/>`,
		"fallback": "keyline-icons:bracket-arrow-left-sharp-fill",
	});
}

export default Component;
