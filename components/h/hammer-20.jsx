import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e7a1zgbqk.css';
import '../../css/d/d_mc1ovfv.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e7a1zgbqk"/><path class="d_mc1ovfv"/>`,
		"fallback": "energy-icons:hammer-20",
	});
}

export default Component;
