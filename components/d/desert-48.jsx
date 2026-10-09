import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v9jlb0bcj.css';
import '../../css/t/t-558ne9u.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v9jlb0bcj"/><path class="t-558ne9u"/>`,
		"fallback": "energy-icons:desert-48",
	});
}

export default Component;
