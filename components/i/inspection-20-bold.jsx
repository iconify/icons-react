import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yz7gt-bls.css';
import '../../css/f/fga2-cbvt.css';
import '../../css/n/n8zhxcbkd.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yz7gt-bls"/><path class="fga2-cbvt"/><path class="n8zhxcbkd"/>`,
		"fallback": "energy-icons:inspection-20-bold",
	});
}

export default Component;
