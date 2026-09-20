import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gr1zmubav.css';
import '../../css/k/kux3ecbeo.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gr1zmubav"/><path class="kux3ecbeo"/>`,
		"fallback": "material-icon-theme:caddy",
	});
}

export default Component;
