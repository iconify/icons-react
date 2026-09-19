import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cb_i9scyn.css';

const viewBox = {"width":960,"height":960};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cb_i9scyn"/>`,
		"fallback": "whh:circleloadertwo",
	});
}

export default Component;
