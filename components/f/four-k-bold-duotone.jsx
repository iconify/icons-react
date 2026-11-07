import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pv_hji6de.css';
import '../../css/j/jvloipb8e.css';
import '../../css/e/e8g5qdb5t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pv_hji6de"/><path class="jvloipb8e"/><path class="e8g5qdb5t"/>`,
		"fallback": "solar:four-k-bold-duotone",
	});
}

export default Component;
