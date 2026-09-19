import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kd1la8bqq.css';

const viewBox = {"width":320,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kd1la8bqq"/>`,
		"fallback": "academicons:elsevier",
	});
}

export default Component;
