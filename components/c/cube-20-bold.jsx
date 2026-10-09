import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yozhcqskc.css';
import '../../css/t/tkfpxusan.css';
import '../../css/y/y9re-u6qy.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yozhcqskc"/><path class="tkfpxusan"/><path class="y9re-u6qy"/>`,
		"fallback": "energy-icons:cube-20-bold",
	});
}

export default Component;
