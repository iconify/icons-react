import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g5_t91bys.css';
import '../../css/b/bcu-xw_8y.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g5_t91bys"/><path class="bcu-xw_8y"/>`,
		"fallback": "energy-icons:bed-48-bold",
	});
}

export default Component;
