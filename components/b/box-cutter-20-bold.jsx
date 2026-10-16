import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/spu-vnbsz.css';
import '../../css/r/r4k-7obry.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="spu-vnbsz"/><path class="r4k-7obry"/>`,
		"fallback": "energy-icons:box-cutter-20-bold",
	});
}

export default Component;
