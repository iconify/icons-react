import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rw1e9n7xw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rw1e9n7xw"/>`,
		"fallback": "icon-park-outline:effects",
	});
}

export default Component;
