import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jvkgehx6a.css';
import '../../css/f/fo-j22b0w.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jvkgehx6a"/><path class="fo-j22b0w"/>`,
		"fallback": "energy-icons:bathtub-48",
	});
}

export default Component;
