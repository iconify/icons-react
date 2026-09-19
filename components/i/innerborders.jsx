import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u98q4jbst.css';

const viewBox = {"width":960,"height":960};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u98q4jbst"/>`,
		"fallback": "whh:innerborders",
	});
}

export default Component;
