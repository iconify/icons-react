import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hb3n1kb5e.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hb3n1kb5e"/>`,
		"fallback": "flat-color-icons:cancel",
	});
}

export default Component;
