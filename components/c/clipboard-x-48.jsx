import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zx59guuve.css';
import '../../css/n/n-q9xfbzi.css';
import '../../css/c/c851adchj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zx59guuve"/><path class="n-q9xfbzi"/><path class="c851adchj"/>`,
		"fallback": "energy-icons:clipboard-x-48",
	});
}

export default Component;
