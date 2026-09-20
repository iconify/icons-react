import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h52a2qe1g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h52a2qe1g"/>`,
		"fallback": "keyline-icons:film-sharp-fill",
	});
}

export default Component;
