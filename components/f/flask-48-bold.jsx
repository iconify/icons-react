import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c3fwuybqi.css';
import '../../css/b/bg063jb_r.css';
import '../../css/q/q-95t6xiu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c3fwuybqi"/><path class="bg063jb_r"/><path class="q-95t6xiu"/>`,
		"fallback": "energy-icons:flask-48-bold",
	});
}

export default Component;
