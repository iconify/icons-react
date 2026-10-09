import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/em933ob1r.css';
import '../../css/b/bxzxb8v8d.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="em933ob1r"/><path class="bxzxb8v8d"/>`,
		"fallback": "energy-icons:bolt-alert-48",
	});
}

export default Component;
