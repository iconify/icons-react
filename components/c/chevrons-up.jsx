import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/s/s3jlzcczn.css';
import '../../css/f/fuoff3b8g.css';
import '../../css/j/jm92ox9fv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="s3jlzcczn wm-shadow"/><path class="fuoff3b8g wm-shadow"/><path class="jm92ox9fv"/></g>`,
		"fallback": "withicons-brutal:chevrons-up",
	});
}

export default Component;
