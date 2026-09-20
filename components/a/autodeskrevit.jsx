import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wd80xzbnc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wd80xzbnc"/>`,
		"fallback": "simple-icons:autodeskrevit",
	});
}

export default Component;
