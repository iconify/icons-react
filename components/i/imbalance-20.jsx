import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hu_t3tbfu.css';
import '../../css/s/syzt_cbmk.css';
import '../../css/n/n0oj8po7r.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hu_t3tbfu"/><path class="syzt_cbmk"/><path class="n0oj8po7r"/>`,
		"fallback": "energy-icons:imbalance-20",
	});
}

export default Component;
