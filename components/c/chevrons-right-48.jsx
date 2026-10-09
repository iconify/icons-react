import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e0obyhbch.css';
import '../../css/z/zlt4eiz7d.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e0obyhbch"/><path class="zlt4eiz7d"/>`,
		"fallback": "energy-icons:chevrons-right-48",
	});
}

export default Component;
