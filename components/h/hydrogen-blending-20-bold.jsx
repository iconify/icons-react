import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ke-cmwbjg.css';
import '../../css/z/zthy_-bth.css';
import '../../css/r/r50nl1bwp.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ke-cmwbjg"/><path class="zthy_-bth"/><path class="r50nl1bwp"/>`,
		"fallback": "energy-icons:hydrogen-blending-20-bold",
	});
}

export default Component;
