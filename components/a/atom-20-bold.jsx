import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gy5juccjo.css';
import '../../css/m/myqgc4b0y.css';
import '../../css/x/x3s8noxxt.css';
import '../../css/b/bmcev9bhk.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gy5juccjo"/><path class="myqgc4b0y"/><path class="x3s8noxxt"/><path class="bmcev9bhk"/>`,
		"fallback": "energy-icons:atom-20-bold",
	});
}

export default Component;
