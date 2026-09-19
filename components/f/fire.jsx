import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ej-tn9ioj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ej-tn9ioj"/>`,
		"fallback": "icon-park-solid:fire",
	});
}

export default Component;
