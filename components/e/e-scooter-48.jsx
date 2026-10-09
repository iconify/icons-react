import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g3lrazbrf.css';
import '../../css/j/jokc02a3k.css';
import '../../css/x/xwvzbv_it.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g3lrazbrf"/><path class="jokc02a3k"/><path class="xwvzbv_it"/>`,
		"fallback": "energy-icons:e-scooter-48",
	});
}

export default Component;
