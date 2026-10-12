import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o1dk65itc.css';
import '../../css/r/roxo87l1y.css';
import '../../css/h/hwjgqrbah.css';
import '../../css/s/sfb8rqn9v.css';
import '../../css/k/ksydp3lsw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o1dk65itc"/><path class="roxo87l1y"/><path class="hwjgqrbah"/><path class="sfb8rqn9v"/><path class="ksydp3lsw"/>`,
		"fallback": "energy-icons:image-x-48-bold",
	});
}

export default Component;
